// The Rubakas mark, from the Identity Guidelines v1.0 (docs/brand).
// Everything is in a 100 x 100 viewBox.

/** The cut tile: a square with the top-left and bottom-right corners cut at 45 degrees. */
export const TILE = 'M26.12 0H100V73.88L73.88 100H0V26.12Z';

/**
 * Capital R, Montserrat ExtraBold, outlined. Cap height is 47.76 (front facet top line to
 * back facet bottom line), baseline at 73.88, centred on the mid-depth square. Drawn together
 * with TILE under fill-rule evenodd it is a hole through the tile, so it takes the ground colour.
 * Montserrat is licensed under the SIL OFL (static/fonts/montserrat/OFL.txt).
 */
export const R_HOLE =
	'M28 73.88V26.12H49.35Q59.79 26.12 65.42 30.86Q71.05 35.6 71.05 43.79Q71.05 49.18 68.46 53.07Q66 56.82 61.7 58.87L72 73.88H57.54L48.87 61.19H41.51V73.88ZM41.51 50.75H49.01Q53.24 50.75 55.32 48.91Q57.4 47.07 57.4 43.79Q57.4 40.45 55.32 38.61Q53.24 36.76 49.01 36.76H41.51Z';

/** The finished mark. Use with fill-rule="evenodd". */
export const MARK = TILE + R_HOLE;

// The mark of the site: the tile as a red line with the R drawn inside it as a solid red letter. It
// replaces the guide's solid tile at the owner's request, to keep red from being spent on the logo.
// Every form sits in the same 100 x 100 box as the solid tile, so one can stand in for another.

/** Stroke width of the contour, in tile units: about half the R's stem, which is 13.51 wide. */
export const CONTOUR_W = 7;

/**
 * The centre line of the contour: the tile's six corners moved in by half the stroke, so that a
 * mitred stroke of width `w` has its outer edge exactly on the tile's edge. A 45 degree edge moved
 * in by d slides its end points along the neighbouring edges by d x (sqrt 2 - 1).
 * @param {number} w stroke width
 */
export function contourPath(w = CONTOUR_W) {
	const d = w / 2;
	const slide = d * (Math.SQRT2 - 1);
	/** @param {number} v */
	const f = (v) => +v.toFixed(2);
	return (
		[
			[26.12 + slide, d],
			[100 - d, d],
			[100 - d, 73.88 - slide],
			[73.88 - slide, 100 - d],
			[d, 100 - d],
			[d, 26.12 + slide]
		]
			.map(([x, y], i) => `${i ? 'L' : 'M'}${f(x)} ${f(y)}`)
			.join('') + 'Z'
	);
}

/** The contour at the standard stroke. Draw it with stroke-linejoin="miter" and no fill. */
export const CONTOUR = contourPath();

/**
 * Under about 32px the standard line thins to a hairline and the R to a smudge. The 16px favicon,
 * the one contour that small, takes this heavier line and no R. (The 14px running markers are the
 * solid tile instead.)
 */
export const CONTOUR_SMALL_W = 18;

/** The cube's silhouette is drawn at this scale so that, as a line, it lands on the contour. */
export const CONTOUR_SCALE = (100 - CONTOUR_W) / 100;

/** The R as a solid letter, for inside the contour. Same outline as the hole in the finished mark. */
export const R_LETTER = R_HOLE;

// Lock-in motion (guide, Motion 07): the cube wakes at 0.3 s, tumbles for 2.4 s on two axes
// with an in-out-back ease, and locks at 2.7 s, where the R cuts in with a 4% pulse.
export const T_START = 0.3;
export const T_LOCK = 2.7;

// The cube is drawn in cabinet projection: depth at half length, at 45 degrees. A cube of side
// A in that projection has the cut tile as its silhouette.
const A = 73.88;
const K = 0.5 * Math.SQRT1_2;
const H = A / 2;
const CORNERS = [-H, H].flatMap((x) => [-H, H].flatMap((y) => [-H, H].map((z) => [x, y, z])));

/** @param {number} x progress, 0 to 1 */
const easeInOutBack = (x) => {
	const c1 = 1.70158;
	const c2 = c1 * 1.525;
	return x < 0.5
		? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
		: (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
};

/**
 * Cube rotation in radians at time t seconds: two turns about X, one about Y.
 * @param {number} t seconds since the intro began
 */
export function anglesAt(t) {
	const u = Math.min(1, Math.max(0, (t - T_START) / (T_LOCK - T_START)));
	const e = easeInOutBack(u);
	return { x: e * 4 * Math.PI, y: e * 2 * Math.PI };
}

/**
 * Convex hull (monotone chain) of 2D points, counter-clockwise.
 * @param {number[][]} points
 * @returns {number[][]}
 */
function hull(points) {
	const pts = points.map((p) => p.slice()).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
	/** @param {number[]} o @param {number[]} a @param {number[]} b */
	const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
	/** @type {number[][]} */
	const lower = [];
	for (const p of pts) {
		while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0)
			lower.pop();
		lower.push(p);
	}
	/** @type {number[][]} */
	const upper = [];
	for (const p of pts.toReversed()) {
		while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0)
			upper.pop();
		upper.push(p);
	}
	return lower.slice(0, -1).concat(upper.slice(0, -1));
}

/**
 * SVG path of the cube's flat silhouette for the given rotation. At 0 and scale 1 it equals TILE.
 * `scale` shrinks it about the centre; the intro draws the cube as a line at CONTOUR_SCALE, so at
 * rest its centre line is the contour's (to within a quarter of a unit at the cut corners).
 * @param {{ x: number, y: number }} angles rotation about X and Y, in radians
 * @param {number} [scale]
 */
export function hullPath({ x: ax, y: ay }, scale = 1) {
	const [cx, sx] = [Math.cos(ax), Math.sin(ax)];
	const [cy, sy] = [Math.cos(ay), Math.sin(ay)];
	const projected = CORNERS.map(([x, y, z]) => {
		// rotate about X, then about Y
		const y1 = y * cx - z * sx;
		const z1 = y * sx + z * cx;
		const x2 = x * cy + z1 * sy;
		const z2 = -x * sy + z1 * cy;
		return [50 + (x2 + K * z2) * scale, 50 - (y1 + K * z2) * scale];
	});
	/** @param {number} v */
	const f = (v) => v.toFixed(2);
	return (
		hull(projected)
			.map(([x, y], i) => `${i ? 'L' : 'M'}${f(x)} ${f(y)}`)
			.join('') + 'Z'
	);
}
