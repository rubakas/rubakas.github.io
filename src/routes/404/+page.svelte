<script>
	import { resolve } from '$app/paths';
	import Mark from '../../lib/Mark.svelte';
</script>

<svelte:head>
	<title>Page not found | Rubakas</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main>
	<div class="mark"><Mark /></div>
	<h1>Page not found.</h1>
	<p>The address may have changed, or it never existed.</p>
	<a class="button" href={resolve('/')}>Back to the homepage</a>
</main>

<style>
	main {
		display: grid;
		justify-items: center;
		align-content: center;
		min-height: 100svh;
		padding: 48px clamp(20px, 5vw, 64px);
		background: var(--color-soot);
		color: var(--color-paper);
		text-align: center;
		overflow-wrap: anywhere;
	}

	.mark {
		width: 96px;
		height: 96px;
	}

	h1 {
		margin: 40px 0 0;
		font-size: clamp(2rem, 1rem + 4.2vw, 3.75rem);
		font-weight: 700;
		line-height: 1.08;
		letter-spacing: -0.01em;
		text-wrap: balance;
	}

	p {
		margin: 20px 0 0;
		max-width: 34ch;
		color: var(--color-slate-light);
		font-size: clamp(1.0625rem, 1rem + 0.35vw, 1.25rem);
		line-height: 1.5;
		text-wrap: balance;
	}

	.button {
		margin-top: 40px;
	}

	@media print {
		main {
			min-height: 0;
			background: none;
			color: var(--color-soot);
		}

		p {
			color: var(--color-ink);
		}

		.button {
			color: var(--color-soot);
		}
	}
</style>
