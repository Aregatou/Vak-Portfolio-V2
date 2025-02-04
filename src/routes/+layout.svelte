<script>
	import Navbar from '$components/navbar.svelte';
	import { onMount } from 'svelte';

	let lineWidth = '100%';

	const updateLineWidth = () => {
		const scrollPercentage =
			(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
		lineWidth = `${100 - scrollPercentage}%`;
	};

	onMount(() => {
		window.addEventListener('scroll', updateLineWidth);

		const handleClick = (e) => {
			const anchor = e.target.closest('a[href^="#"]');
			if (anchor) {
				e.preventDefault();
				const targetId = anchor.getAttribute('href');
				const target = document.querySelector(targetId);
				if (target) {
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
					window.history.pushState(null, '', targetId);
				}
			}
		};

		document.addEventListener('click', handleClick, { capture: true, passive: false });

		return () => {
			window.removeEventListener('scroll', updateLineWidth);
			document.removeEventListener('click', handleClick, { capture: true });
		};
	});
</script>

<div class="colored-line" style="width: {lineWidth};" />

<nav>
	<Navbar />
</nav>

<main>
	<slot />
</main>

<footer />

<style lang="scss">
	@import '$styles/global.css';

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
		flex-grow: 1;
		position: relative;
		transition: background 0.3s ease-in-out;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
