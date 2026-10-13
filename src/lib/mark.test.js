import { describe, expect, it } from 'vitest';
import { MARK, R_HOLE, T_LOCK, T_START, TILE, anglesAt, hullPath } from './mark.js';

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
