<script>
	import Leftside from '$components/leftside.svelte';
	import { onMount } from 'svelte';

	let isNavOpen = false; // Controls sidebar visibility
	let lineWidth = '100%'; // Progress bar width

	// Scroll progress bar update
	onMount(() => {
		const updateLineWidth = () => {
			const scrollPercentage =
				(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
			lineWidth = `${100 - scrollPercentage}%`;
		};

		window.addEventListener('scroll', updateLineWidth);

		return () => {
			window.removeEventListener('scroll', updateLineWidth);
		};
	});

	// Toggle Sidebar Visibility
	function toggleNav() {
		isNavOpen = !isNavOpen;
	}
</script>

<!-- Hamburger Menu Button (Appears on Small Screens) -->
<button class="hamburger-menu" on:click={toggleNav}>
	☰
</button>

<!-- Sidebar Navigation -->
<nav class:is-hidden={!isNavOpen}>
	<Leftside />
</nav>

<!-- Main Content -->
<main >
	<!-- <main class:blurred={!isNavOpen}> -->
	<!-- Overlay (clicking it closes the sidebar) -->
	<!-- <div class:overlay={!isNavOpen} on:click={toggleNav}></div> -->

	<!-- Main content slot -->
	<slot />
</main>

<footer />

<style lang="scss">
	@import '$styles/global.css';

	/* Nav Container */
	nav {
		width: 300px;
		background-image: url('/images/denim.png');
		background-repeat: repeat;
		padding: 10px;
		flex-shrink: 0;
		color: $primary-red;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		z-index: 1000;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		transition: transform 0.3s ease-in-out;
	}
	.hamburger-menu {
		display:none;
	}

	/* Hide Sidebar on Small Screens */
	@media (max-width: 900px) {
		nav {
			position: fixed;
			left: 0;
			top: 0;
			height: 100vh;
			transform: translateX(-100%);
			width: 250px;
			// background: rgba(0, 0, 0, 0.95);
			box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.5);
		}

		/* Show Sidebar when Open */
		nav.is-hidden {
			transform: translateX(0);
		}

		/* Hamburger Menu Button */
		.hamburger-menu {
			position: fixed;
			top: 20px;
			left: 20px;
			background: transparent;
			border: none;
			font-size: 30px;
			cursor: pointer;
			color: white;
			z-index: 1001;
		}
	}

	/* Main Content */
	main {
		flex-grow: 1;
		position: relative;
		transition: background 0.3s ease-in-out;
		z-index: 1;
	}

	/* Darken Main Content When Sidebar is Open */
	.blurred {
		background: rgba(0, 0, 0, 0.5); /* Darkened effect */
	}

	/* Overlay (clicking closes sidebar) */
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5); /* Dark transparent overlay */
		z-index: 1001; /* Behind sidebar */
		transition: opacity 0.3s ease-in-out;
		opacity: 0;
		pointer-events: none;
	}

	/* Show Overlay When Sidebar is Open */
	.overlay[overlay] {
		opacity: 1;
		pointer-events: all;
	}
</style>
