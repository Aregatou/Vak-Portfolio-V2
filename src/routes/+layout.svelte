<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import HamburgerToggle from '$components/ui/hamburgerToggle.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const synthMode = writable(false);

	let synthAudio;
	let isSynthPlaying = false;
	let lineWidth = '100%';
	let navOpen = false;
	let mounted = false;

	const updateLineWidth = () => {
		const scrollPercentage =
			(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
		lineWidth = `${100 - scrollPercentage}%`;
	};

	const toggleNav = () => {
		navOpen = !navOpen;
		if (navOpen && window.innerWidth < 1024) {
			document.body.classList.add('no-scroll');
			document.documentElement.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
			document.documentElement.classList.remove('no-scroll');
		}
	};

	const toggleSynthAudio = () => {
		if (!synthAudio) return;
		if (isSynthPlaying) {
			synthAudio.pause();
			isSynthPlaying = false;
		} else {
			synthAudio
				.play()
				.then(() => (isSynthPlaying = true))
				.catch((err) => console.error('Audio playback error:', err));
		}
	};

	let animationFrameId = null;
	let offset = 0;
	const speed = 0.3;
	const maxOffset = 332;
	let gridEl;

	const animateGrid = () => {
		offset += speed;
		if (gridEl) {
			gridEl.style.backgroundPosition = `0 -${offset % maxOffset}px`;
		}
		animationFrameId = requestAnimationFrame(animateGrid);
	};

	const startAnimation = () => {
		if (!animationFrameId && gridEl) {
			animateGrid();
		}
	};

	const stopAnimation = () => {
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
			animationFrameId = null;
		}
	};

	const updateDocumentClass = (enabled) => {
		if (enabled) {
			document.documentElement.classList.add('synth-mode');
		} else {
			document.documentElement.classList.remove('synth-mode');
		}
	};

	const handleResize = () => {
		if (window.innerWidth >= 1024 && navOpen) {
			navOpen = false;
			document.body.classList.remove('no-scroll');
			document.documentElement.classList.remove('no-scroll');
		}
	};

	const handleVisibilityChange = () => {
		if (document.visibilityState === 'visible' && navOpen) {
			navOpen = false;
			document.body.classList.remove('no-scroll');
			document.documentElement.classList.remove('no-scroll');
		}
	};

	const handlePageShow = () => {
		navOpen = false;
		document.body.classList.remove('no-scroll');
		document.documentElement.classList.remove('no-scroll');
	};

	const handleClick = (e) => {
		const anchor = e.target.closest('a[href^="#"]');
		if (anchor) {
			e.preventDefault();
			const targetId = anchor.getAttribute('href');
			const target = document.querySelector(targetId);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				window.history.pushState(null, '', targetId);
				
				if (navOpen && window.innerWidth < 1024) {
					navOpen = false;
					document.body.classList.remove('no-scroll');
					document.documentElement.classList.remove('no-scroll');
				}
			}
		}
	};

	onMount(() => {
		navOpen = false;
		document.body.classList.remove('no-scroll');
		document.documentElement.classList.remove('no-scroll');

		setTimeout(() => {
			mounted = true;
		}, 100);

		window.addEventListener('scroll', updateLineWidth);
		window.addEventListener('resize', handleResize);
		window.addEventListener('pageshow', handlePageShow);
		document.addEventListener('visibilitychange', handleVisibilityChange);
		document.addEventListener('click', handleClick, { capture: true, passive: false });

		gridEl = document.querySelector('.scrolling-grid');

		const unsubscribe = synthMode.subscribe((value) => {
			if (value) {
				startAnimation();
				if (synthAudio) {
					synthAudio.volume = 0.07;
					synthAudio
						.play()
						.then(() => (isSynthPlaying = true))
						.catch((err) => console.warn('Auto-play blocked', err));
				}
			} else {
				stopAnimation();
				if (synthAudio) {
					synthAudio.pause();
					isSynthPlaying = false;
				}
			}
		});

		return () => {
			window.removeEventListener('scroll', updateLineWidth);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('pageshow', handlePageShow);
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			document.removeEventListener('click', handleClick, { capture: true });
			document.body.classList.remove('no-scroll');
			unsubscribe();
		};
	});
</script>

<audio bind:this={synthAudio} src="/audio/80s-retro-synth-wave.mp3" preload="auto" loop aria-label="Background synthwave music">
	<p>Background synthwave music for enhanced browsing experience</p>
</audio>
<div class="colored-line" style="width: {lineWidth};" />
<div class="noise" />
<div class="scrolling-grid" />
<HamburgerToggle {navOpen} {toggleNav} />

<nav class:open={navOpen} class:mounted>
	<Navbar {synthMode} {toggleSynthAudio} {isSynthPlaying} />
</nav>

{#if navOpen}
	<div
		class="overlay"
		role="button"
		tabindex="0"
		on:click={toggleNav}
		on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleNav()}
	/>
{/if}

<main>
	<slot />
</main>

<footer />

<style global lang="scss">
	@use 'global.scss';

	.colored-line {
		height: 4px;
		background-color: $primary-orange;
		position: fixed;
		top: 0;
		left: 0;
		transition: width 0.25s ease-out;
		z-index: 100;
	}

	nav {
		width: 300px;
		background: var(--nav-background);
		background-repeat: repeat;
		padding: 10px;
		color: $primary-red;
		display: flex;
		justify-content: center;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		position: static;
		flex-shrink: 0;
		z-index: 10;
	}

	main {
		width: 100%;
		flex-grow: 1;
		position: relative;
		transition: background 0.3s ease-in-out;
		display: flex;
		flex-direction: column;
		z-index: 10;
		align-items: stretch;
		overflow: auto;
	}

	@include respond-to(mobile) {
		nav {
			position: fixed;
			top: 0;
			left: 0;
			height: 100vh;
			transform: translateX(-100%);
			transition: none;
			z-index: 103;
		}

		nav.mounted {
			transition: transform 0.3s ease-out;
		}

		nav.open {
			transform: translateX(0);
		}
		.overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background: rgba(0, 0, 0, 0.3);
			z-index: 101;
		}
	}
	:global(body.no-scroll),
	:global(html.no-scroll) {
		overflow: hidden !important;
	}
</style>
