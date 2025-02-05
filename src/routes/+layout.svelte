<script>
	import Navbar from '$components/navbar.svelte';
	import HamburgerToggle from '$components/ui/hamburgerToggle.svelte';
	import { onMount } from 'svelte';

	let lineWidth = '100%';
	let navOpen = false;

	const updateLineWidth = () => {
		const scrollPercentage =
			(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
		lineWidth = `${100 - scrollPercentage}%`;
	};

	// const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

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

	onMount(() => {
		window.addEventListener('scroll', updateLineWidth);
		const handleResize = () => {
			if (window.innerWidth >= 1024 && navOpen) {
				navOpen = false;
				document.body.style.overflow = '';
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		const handleClick = (e) => {
			const anchor = e.target.closest('a[href^="#"]');
			if (anchor) {
				e.preventDefault();
				const targetId = anchor.getAttribute('href');
				const target = document.querySelector(targetId);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
					window.history.pushState(null, '', targetId);
				}
			}
		};

		document.addEventListener('click', handleClick, { capture: true, passive: false });
		return () => {
			window.removeEventListener('scroll', updateLineWidth);
			window.removeEventListener('resize', handleResize);
			document.removeEventListener('click', handleClick, { capture: true });
			document.body.style.overflow = '';
		};
	});
</script>

<div class="colored-line" style="width: {lineWidth};" />

<HamburgerToggle {navOpen} {toggleNav} />

<nav class:open={navOpen}>
	<Navbar />
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

<style lang="scss">
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
		background-image: url('/images/denim.png');
		background-repeat: repeat;
		padding: 10px;
		color: $primary-red;
		display: flex;
		justify-content: center;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		position: static;
		flex-shrink: 0;
		z-index: 2;
	}

	main {
		width: 100%;
		flex-grow: 1;
		position: relative;
		transition: background 0.3s ease-in-out;
		z-index: 1;
		display: flex;
		flex-direction: column;
		z-index: 3;
		align-items: stretch;
	}

	@include respond-to(mobile) {
		nav {
			position: fixed;
			top: 0;
			left: 0;
			height: 100vh;
			transform: translateX(-100%);
			transition: transform 0.3s ease-out;
			z-index: 103;
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
