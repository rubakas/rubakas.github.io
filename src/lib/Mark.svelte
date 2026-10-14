<script>
	import { onMount } from 'svelte';
	import {
		CONTOUR,
		CONTOUR_SCALE,
		CONTOUR_W,
		MARK,
		R_LETTER,
		hullPath,
		anglesAt,
		T_LOCK
	} from './mark.js';

	/**
	 * The mark is the cut tile drawn as a red line, with the R inside it as a solid red letter.
	 * `intro` plays the lock-in on load (only the cover does; the flag is set in app.html).
	 * `solid` is the guide's own mark, the red tile with the R cut out of it. The footer and the
	 * running markers use it: at those sizes (24 and 32px) a line would thin to a hairline, but the
	 * guide still keeps the R from 24px up.
	 */
	let { intro = false, solid = false } = $props();

	/** @type {SVGPathElement | undefined} */
	let cube = $state();
	let locked = $state(false);

	onMount(() => {
		const root = document.documentElement;
		if (!intro || !('intro' in root.dataset)) return;

		// hydration made it: the page's failsafe timer (its id is the flag's value) is no longer needed
		clearTimeout(Number(root.dataset.intro));

		const start = performance.now();
		/** @type {number} */
		let frame = 0;
		/** @param {number} now */
		const tick = (now) => {
			const t = (now - start) / 1000;
			if (t >= T_LOCK) {
				// the cube is back on the tile; swap to the finished mark, the R cuts in
				delete root.dataset.intro;
				locked = true;
				return;
			}
			cube?.setAttribute('d', hullPath(anglesAt(t), CONTOUR_SCALE));
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);

		return () => {
			cancelAnimationFrame(frame);
			// unmounted before the lock: do not leave the page stuck on the stand-in cube
			delete root.dataset.intro;
		};
	});
</script>

<svg class="mark" class:lock={locked} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
	{#if solid}
		<path class="solid" d={MARK} fill-rule="evenodd" />
	{:else}
		<g class="done">
			<path class="line" d={CONTOUR} stroke-width={CONTOUR_W} />
			<path class="letter" d={R_LETTER} fill-rule="evenodd" />
		</g>
		<path class="line cube" bind:this={cube} d={CONTOUR} stroke-width={CONTOUR_W} />
	{/if}
</svg>

<style>
	.mark {
		display: block;
		flex: none;
		overflow: visible;
		/* the red is the point of the mark; it prints even when backgrounds are off */
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}

	/* The outer edge of the line is the old solid tile's edge (see contourPath), so every form fills
	   the same box. The miter limit bevels the sharp corners the cube passes through mid-tumble. */
	.line {
		fill: none;
		stroke: var(--color-red);
		stroke-linejoin: miter;
		stroke-miterlimit: 4;
	}

	/* the R as a letter and the guide's solid mark: plain red fills */
	.letter {
		fill: var(--color-red);
	}

	/* A parent can recolour the solid mark by setting --mark-fill (the running markers do on hover). */
	.solid {
		fill: var(--mark-fill, var(--color-red));
		transition: fill 0.18s cubic-bezier(0.16, 1, 0.3, 1);
	}

	/* While the lock-in plays, a cube drawn as the same line stands in for the finished mark. */
	.cube {
		display: none;
	}
	:global([data-intro]) .done {
		display: none;
	}
	:global([data-intro]) .cube {
		display: inline;
	}

	.lock {
		animation: lock 0.36s cubic-bezier(0.16, 1, 0.3, 1);
		transform-origin: 50% 50%;
	}

	@keyframes lock {
		0% {
			transform: scale(1);
		}
		35% {
			transform: scale(1.04);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
