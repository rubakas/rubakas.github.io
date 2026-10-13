<script>
	import { onMount } from 'svelte';
	import { TILE, MARK, hullPath, anglesAt, T_LOCK } from './mark.js';

	/**
	 * `intro` plays the lock-in on load (only the cover does; the flag is set in app.html).
	 * `solid` draws the tile alone, with no R, for the small sizes the guide reserves for it.
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
			cube?.setAttribute('d', hullPath(anglesAt(t)));
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);

		return () => {
			cancelAnimationFrame(frame);
			// unmounted before the lock: do not leave the page stuck on the stand-in tile
			delete root.dataset.intro;
		};
	});
</script>

<svg class="mark" class:lock={locked} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
	{#if solid}
		<path class="plain" d={TILE} />
	{:else}
		<path class="done" d={MARK} fill-rule="evenodd" />
		<path class="cube" bind:this={cube} d={TILE} />
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

	.done,
	.cube,
	.plain {
		fill: var(--color-red);
	}

	/* While the lock-in plays the flat cube stands in for the finished mark. */
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
