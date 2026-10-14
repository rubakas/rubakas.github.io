<script>
	import { onMount } from 'svelte';
	import Mark from '../lib/Mark.svelte';

	const email = 'contact@rubakas.com';
	const title = 'Rubakas: Taste is load-bearing';
	const description =
		'Rubakas is a small crew that runs AI agents on real software work. AI consulting and strategy, tech support and maintenance.';
	const site = 'https://rubakas.com';

	// Pressing an in-page link (a running marker, the footer logo) glides to its target. The page asks
	// for smooth scrolling only for those presses (app.css, html[data-glide]): switched on for every
	// scroll it would also animate the restore after a reload from the top down to where the visitor
	// was. Capture phase, so the flag is up before the browser or SvelteKit scrolls.
	onMount(() => {
		const root = document.documentElement;
		/** @type {ReturnType<typeof setTimeout> | undefined} */
		let timer;
		/** @param {MouseEvent} event */
		const glide = (event) => {
			if (!(event.target instanceof Element) || !event.target.closest('a[href^="#"]')) return;
			root.dataset.glide = '';
			clearTimeout(timer);
			timer = setTimeout(() => delete root.dataset.glide, 2000);
		};
		document.addEventListener('click', glide, true);
		return () => {
			document.removeEventListener('click', glide, true);
			clearTimeout(timer);
			delete root.dataset.glide;
		};
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="{site}/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Rubakas" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{site}/" />
	<meta property="og:image" content="{site}/og-1200x630.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The Rubakas mark and wordmark: Taste is load-bearing." />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main>
	<section class="cover">
		<div class="stage">
			<div class="cover-mark"><Mark intro /></div>
			<h1>
				<span class="wordmark">Rubakas</span>
				<span class="tagline">Taste is load-bearing</span>
			</h1>
			<p class="lede">A small crew running AI&nbsp;agents on real software work.</p>
			<a class="button" href="mailto:{email}">Talk with us</a>
		</div>
	</section>

	<section id="work" class="day work" aria-labelledby="work-title">
		<div class="wrap">
			<div class="running">
				<a
					class="running-link"
					href="#work"
					aria-label="Scroll to the top of this section: Two ways to work with the crew"
					><span class="running-mark"><Mark solid /></span></a
				>
			</div>
			<h2 id="work-title">Two ways to work with the crew.</h2>
			<dl class="offers">
				<div class="offer">
					<dt>AI consulting and strategy</dt>
					<dd>
						Orchestration, development and advice, from the first plan to a system in production.
					</dd>
				</div>
				<div class="offer">
					<dt>Tech support and maintenance</dt>
					<dd>Help when you need it, or full maintenance of the systems you already run.</dd>
				</div>
			</dl>
		</div>
	</section>

	<section id="crew" class="day crew" aria-labelledby="crew-title">
		<div class="wrap">
			<div class="running">
				<a
					class="running-link"
					href="#crew"
					aria-label="Scroll to the top of this section: A small crew with a big crew behind it"
					><span class="running-mark"><Mark solid /></span></a
				>
			</div>
			<div class="crew-head">
				<h2 id="crew-title">A small crew with a big crew behind it.</h2>
				<p>
					Friends who spent years building for the web with Ruby on Rails. Today we run crews of AI
					agents, with hardened specs, clear roles and honest review.
				</p>
			</div>
			<ul class="principles" role="list">
				<li>
					<h3>Humans lead</h3>
					<p>Agents draft, people decide. We talk about review, not autonomy.</p>
				</li>
				<li>
					<h3>Plain-spoken</h3>
					<p>Short sentences. No hype about AI, no magic. We say what the crew does.</p>
				</li>
				<li>
					<h3>Convention over improvisation</h3>
					<p>The Rails habit, applied to machines: defaults, structure, repeatable results.</p>
				</li>
			</ul>
		</div>
	</section>

	<section class="night close" aria-labelledby="close-title">
		<div class="wrap close-row">
			<div class="close-mark"><Mark /></div>
			<div class="close-copy">
				<h2 id="close-title">Tell us what you are building.</h2>
				<p>Or what needs looking after.</p>
				<a class="button" href="mailto:{email}">Email {email}</a>
			</div>
		</div>
	</section>
</main>

<footer>
	<div class="wrap footer-row">
		<a class="lockup" href="#top" aria-label="Rubakas, back to the top">
			<span class="lockup-mark"><Mark solid /></span>
			<span class="wordmark">Rubakas</span>
		</a>
		<a class="github" href="https://github.com/rubakas">github.com/rubakas</a>
	</div>
</footer>

<style>
	main,
	footer {
		/* with the text size turned up, long words and the address wrap rather than widen the page */
		overflow-wrap: anywhere;
		--gutter: clamp(20px, 5vw, 64px);
		/* One twelve-column grid runs through every band: columns 1, 5 and 9 are the shared edges. */
		--col-gap: clamp(20px, 2.5vw, 40px);
	}

	.wrap {
		width: min(100% - 2 * var(--gutter), 72rem);
		margin-inline: auto;
	}

	/* Night: the cover and the close. Paper text on soot. */
	.cover,
	.night,
	footer {
		background: var(--color-soot);
		color: var(--color-paper);
	}

	/* Day: paper ground, soot ink. */
	.day {
		--band-y: clamp(72px, 11vw, 144px);
		/* where a section's marker lands when its marker is pressed, measured from the top of the screen */
		--land: clamp(28px, 4vw, 56px);
		background: var(--color-paper);
		color: var(--color-soot);
		padding-block: var(--band-y);
		/* The section scrolls to the top with its marker --land down, not a whole band of padding down. */
		scroll-margin-top: calc(var(--land) - var(--band-y));
	}

	/* Two day sections in a row share one gap, not two. This one has no padding above its marker. */
	.day + .day {
		padding-top: 0;
		scroll-margin-top: var(--land);
	}

	/* The lockup's measures come from the guide: stacked, scaled from the tile height --h. */
	.cover {
		--h: clamp(88px, min(28vw, 30svh), max(220px, 15vw));
		min-height: 100svh;
		display: grid;
		place-items: center;
		padding: 48px var(--gutter);
	}

	.stage {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.cover-mark {
		width: var(--h);
		height: var(--h);
	}

	h1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: calc(var(--h) * 0.257);
		margin: calc(var(--h) * 0.257) 0 0;
		font-weight: 400;
	}

	.wordmark {
		font-weight: 700;
		line-height: 1;
		letter-spacing: 0.2em;
		/* the tracking trails the last letter; this puts the optical centre back */
		padding-left: 0.2em;
		text-transform: uppercase;
	}

	.cover .wordmark {
		font-size: calc(var(--h) * 0.414);
	}

	.tagline {
		font-family: var(--font-mono);
		font-size: max(11px, calc(var(--h) * 0.157));
		line-height: 1;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	/* The one plain sentence that says what the crew does, so it reads at full strength: paper, and
	   larger than the body copy. */
	.lede {
		margin: clamp(32px, 5svh, 52px) 0 0;
		max-width: 34ch;
		color: var(--color-paper);
		font-size: clamp(1.125rem, 0.95rem + 0.6vw, 1.375rem);
		line-height: 1.5;
		text-wrap: balance;
	}

	/* The button itself lives in app.css; here it only gets its place on the page. */
	.button {
		margin-top: clamp(24px, 4svh, 36px);
	}

	@media (hover: hover) {
		.github:hover {
			color: var(--color-paper);
		}
	}

	/* A wordless section marker from the guide's running header: the solid mark at 24px on a hairline. */
	.running {
		/* its own block formatting context, so the link's negative margin stays inside it instead of
		   collapsing up through a section that has no padding above (the second day band) */
		display: flow-root;
		margin: 0 0 clamp(40px, 6vw, 72px);
		padding-bottom: 16px;
		border-bottom: 1px solid var(--color-hairline);
	}

	/* The marker is a link that scrolls its own section to the top. The target is 44px, so the 24px
	   mark gets 10px of room that the negative margin takes back out of the layout. On hover and press
	   the tile turns soot, as the button turns paper. */
	.running-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		margin: -10px 0 -10px -10px;
	}

	.running-link:active {
		--mark-fill: var(--color-soot);
	}

	@media (hover: hover) {
		.running-link:hover {
			--mark-fill: var(--color-soot);
		}
	}

	.running-mark {
		display: block;
		width: 24px;
		height: 24px;
	}

	h2 {
		margin: 0;
		max-width: 18ch;
		font-size: clamp(2rem, 1rem + 4.2vw, 3.75rem);
		font-weight: 700;
		line-height: 1.08;
		letter-spacing: -0.01em;
		text-wrap: balance;
	}

	/* What we do: two rows between soot rules, the guide's spec-sheet pattern. */
	.offers {
		margin: clamp(40px, 6vw, 72px) 0 0;
		border-top: 1px solid var(--color-soot);
	}

	.offer {
		display: grid;
		gap: 12px;
		padding: 28px 0;
		border-bottom: 1px solid var(--color-soot);
	}

	dt {
		font-size: clamp(1.375rem, 1rem + 1.2vw, 1.875rem);
		font-weight: 600;
		line-height: 1.2;
	}

	dd {
		margin: 0;
		max-width: 56ch;
		color: var(--color-ink);
		font-size: clamp(1.0625rem, 1rem + 0.35vw, 1.25rem);
		line-height: 1.6;
		text-wrap: pretty;
	}

	/* How we work: one statement, then three plain columns. */
	.crew-head {
		display: grid;
		gap: 28px;
	}

	.crew-head p {
		margin: 0;
		max-width: 46ch;
		color: var(--color-ink);
		font-size: clamp(1.0625rem, 1rem + 0.35vw, 1.25rem);
		line-height: 1.6;
		text-wrap: pretty;
	}

	.principles {
		display: grid;
		gap: 32px;
		margin: clamp(48px, 7vw, 88px) 0 0;
		padding: 0;
		list-style: none;
	}

	.principles li {
		padding-top: 20px;
		border-top: 1px solid var(--color-soot);
	}

	/* The principles are the page's trust anchor, so they sit one clear step below the band heading,
	   not at footnote size. */
	h3 {
		margin: 0;
		font-size: clamp(1.25rem, 1rem + 0.9vw, 1.5rem);
		font-weight: 600;
		line-height: 1.25;
	}

	.principles p {
		margin: 12px 0 0;
		max-width: 34ch;
		color: var(--color-ink);
		font-size: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
		line-height: 1.6;
		text-wrap: pretty;
	}

	/* Close: the finished mark, large, on soot. The page opens and ends on the tile. */
	.close {
		padding-block: clamp(72px, 11vw, 144px) clamp(56px, 8vw, 96px);
	}

	.close-row {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 40px;
	}

	.close-mark {
		order: -1;
		width: 88px;
		height: 88px;
	}

	.close p {
		margin: 20px 0 0;
		color: var(--color-slate-light);
		font-size: clamp(1.0625rem, 1rem + 0.35vw, 1.25rem);
		line-height: 1.5;
	}

	.close .button {
		margin-top: 40px;
	}

	footer {
		padding-block: 0 40px;
	}

	.footer-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 20px 32px;
		padding-top: 28px;
		border-top: 1px solid var(--color-ink);
	}

	/* The footer logo is a link to the top of the page; like the other footer link it keeps a 44px
	   target. The mark is the guide's solid tile here, and the one filled tile left on the page. */
	.lockup {
		display: flex;
		align-items: center;
		gap: 14px;
		min-height: 44px;
		color: var(--color-paper);
		text-decoration: none;
		transition: color 0.18s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (hover: hover) {
		.lockup:hover {
			color: var(--color-slate-light);
		}
	}

	.lockup-mark {
		width: 32px;
		height: 32px;
	}

	.lockup .wordmark {
		font-size: 15px;
	}

	.github {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		color: var(--color-slate-light);
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		letter-spacing: 0.06em;
		text-decoration: underline;
		text-decoration-color: var(--color-slate);
		text-underline-offset: 0.35em;
		transition: color 0.18s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (min-width: 48rem) {
		.offer,
		.principles,
		.close-row {
			grid-template-columns: repeat(12, minmax(0, 1fr));
			column-gap: var(--col-gap);
		}

		.offer {
			align-items: baseline;
			padding: 40px 0;
		}

		.offer dt {
			grid-column: 1 / 5;
		}

		.offer dd {
			grid-column: 5 / -1;
		}

		/* equal thirds: columns 1, 5 and 9 */
		.principles li {
			grid-column: span 4;
		}

		.close-row {
			display: grid;
			align-items: center;
		}

		/* the mark leads in the DOM for the mobile order; both share row 1 here */
		.close-copy {
			grid-column: 1 / 9;
			grid-row: 1;
		}

		.close-mark {
			order: 0;
			grid-column: 9 / -1;
			grid-row: 1;
			width: 100%;
			height: auto;
			aspect-ratio: 1;
		}
	}

	@media (min-width: 64rem) {
		.crew-head {
			grid-template-columns: repeat(12, minmax(0, 1fr));
			column-gap: var(--col-gap);
			align-items: end;
		}

		.crew-head h2 {
			grid-column: 1 / 9;
		}

		.crew-head p {
			grid-column: 9 / -1;
		}
	}

	/* A phone on its side: the lockup keeps its proportions but is smaller, and the rhythm is
	   tighter, so the button is still on the first screen. */
	@media (max-height: 32rem) {
		.cover {
			--h: clamp(64px, 22svh, 120px);
			padding-block: 20px;
		}

		.lede {
			margin-top: 16px;
			max-width: 56ch;
		}

		.cover .button {
			margin-top: 16px;
		}
	}

	/* Saved as PDF or printed, backgrounds are usually off: every band becomes soot on white. The mark
	   keeps its red (see Mark.svelte). */
	@media print {
		.cover,
		.night,
		.day,
		footer {
			min-height: 0;
			background: none;
			color: var(--color-soot);
		}

		.cover {
			padding-block: 24px;
		}

		.lede,
		.close p,
		.github {
			color: var(--color-ink);
		}

		.github {
			text-decoration-color: var(--color-ink);
		}

		.button {
			color: var(--color-soot);
		}

		.running {
			break-after: avoid;
		}

		.offer,
		.principles li,
		.close-row {
			break-inside: avoid;
		}

		h2,
		h3 {
			break-after: avoid;
			break-inside: avoid;
		}
	}
</style>
