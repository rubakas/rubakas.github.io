import { describe, expect, it } from 'vitest';
import {
	CONTOUR,
	CONTOUR_SCALE,
	CONTOUR_SMALL_W,
	CONTOUR_W,
	MARK,
	R_HOLE,
	R_LETTER,
	T_LOCK,
	T_START,
	TILE,
	anglesAt,
	contourPath,
	hullPath
} from './mark.js';

/**
 * The corner points of a path made only of M and L moves, as sorted "x,y" strings.
 * @param {string} path
 */
const corners = (path) =>
	[...path.matchAll(/-?\d+(?:\.\d+)?\s+-?\d+(?:\.\d+)?/g)]
		.map(([pair]) => pair.trim().split(/\s+/).map(Number).join(','))
		.sort();

// The cut tile, written out as the six corners of TILE.
const TILE_CORNERS = ['26.12,0', '100,0', '100,73.88', '73.88,100', '0,100', '0,26.12'].sort();

describe('anglesAt', () => {
	it('holds still until the cube wakes', () => {
		for (const t of [0, T_START]) {
			const { x, y } = anglesAt(t);
			expect(Math.abs(x)).toBe(0);
			expect(Math.abs(y)).toBe(0);
		}
	});

	it('has turned twice about X and once about Y when it locks', () => {
		const { x, y } = anglesAt(T_LOCK);
		expect(x).toBeCloseTo(4 * Math.PI, 10);
		expect(y).toBeCloseTo(2 * Math.PI, 10);
	});

	it('stays locked afterwards', () => {
		expect(anglesAt(T_LOCK + 10)).toEqual(anglesAt(T_LOCK));
	});

	it('overshoots on the way, which is what the in-out-back ease is for', () => {
		const { x } = anglesAt(T_START + (T_LOCK - T_START) * 0.9);
		expect(x).toBeGreaterThan(4 * Math.PI);
	});
});

describe('hullPath', () => {
	it('is the cut tile when the cube is at rest', () => {
		expect(corners(hullPath({ x: 0, y: 0 }))).toEqual(TILE_CORNERS);
	});

	it('lands back on the cut tile when the cube locks', () => {
		expect(corners(hullPath(anglesAt(T_LOCK)))).toEqual(TILE_CORNERS);
	});

	it('is a closed path', () => {
		expect(hullPath({ x: 0.7, y: 1.1 })).toMatch(/^M.*Z$/);
	});

	it('changes shape mid-tumble', () => {
		expect(hullPath({ x: Math.PI / 3, y: Math.PI / 5 })).not.toBe(hullPath({ x: 0, y: 0 }));
	});
});

describe('MARK', () => {
	it('is the tile with the R cut through it', () => {
		expect(MARK).toBe(TILE + R_HOLE);
	});
});

describe('contourPath', () => {
	/** The six corners as numbers, in drawing order. @param {string} path */
	const points = (path) =>
		[...path.matchAll(/-?\d+(?:\.\d+)?\s+-?\d+(?:\.\d+)?/g)].map(([pair]) =>
			pair.trim().split(/\s+/).map(Number)
		);

	it('is the cut tile itself when the line has no width', () => {
		expect(corners(contourPath(0))).toEqual(TILE_CORNERS);
	});

	it('keeps the tile cut: six corners in a closed path', () => {
		expect(CONTOUR).toMatch(/^M.*Z$/);
		expect(points(CONTOUR)).toHaveLength(6);
	});

	it('sits half a stroke inside the tile, so the stroke ends on the tile edge', () => {
		const d = CONTOUR_W / 2;
		const xs = points(CONTOUR).map(([x]) => x);
		const ys = points(CONTOUR).map(([, y]) => y);
		expect(Math.min(...xs)).toBeCloseTo(d, 2);
		expect(Math.max(...xs)).toBeCloseTo(100 - d, 2);
		expect(Math.min(...ys)).toBeCloseTo(d, 2);
		expect(Math.max(...ys)).toBeCloseTo(100 - d, 2);
	});

	it('keeps both cuts at 45 degrees, a half stroke in from the tile cuts', () => {
		const d = CONTOUR_W / 2;
		const sums = points(CONTOUR).map(([x, y]) => x + y);
		// the tile's cuts lie on x + y = 26.12 and x + y = 173.88; moving in by d shifts them by d x sqrt 2
		// the corners run clockwise from the top-left cut: 0 and 5 are its ends, 2 and 3 the bottom-right cut's
		for (const i of [0, 5]) expect(sums[i]).toBeCloseTo(26.12 + d * Math.SQRT2, 1);
		for (const i of [2, 3]) expect(sums[i]).toBeCloseTo(173.88 - d * Math.SQRT2, 1);
	});
});

describe('R_LETTER', () => {
	it('is the same R that is cut out of the finished mark', () => {
		expect(R_LETTER).toBe(R_HOLE);
	});
});

describe('the cube as a line', () => {
	/** @param {string} path */
	const xy = (path) =>
		[...path.matchAll(/-?\d+(?:\.\d+)?\s+-?\d+(?:\.\d+)?/g)]
			.map(([pair]) => pair.trim().split(/\s+/).map(Number))
			.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

	it('lands on the contour centre line when it locks, so the swap does not jump', () => {
		const cube = xy(hullPath(anglesAt(T_LOCK), CONTOUR_SCALE));
		const contour = xy(CONTOUR);
		expect(cube).toHaveLength(contour.length);
		cube.forEach(([x, y], i) => {
			expect(Math.abs(x - contour[i][0])).toBeLessThan(0.25);
			expect(Math.abs(y - contour[i][1])).toBeLessThan(0.25);
		});
	});

	it('is unchanged at scale 1', () => {
		expect(hullPath({ x: 0.7, y: 1.1 }, 1)).toBe(hullPath({ x: 0.7, y: 1.1 }));
	});
});

describe('the small contour', () => {
	it('is a heavier line than the standard one, for the 16px favicon', () => {
		expect(CONTOUR_SMALL_W).toBeGreaterThan(CONTOUR_W);
		expect(CONTOUR_SMALL_W * (16 / 100)).toBeGreaterThan(2); // at least a 2px line at 16px
		expect(contourPath(CONTOUR_SMALL_W).match(/L/g)).toHaveLength(5);
	});
});
