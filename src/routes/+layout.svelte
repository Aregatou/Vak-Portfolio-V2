<script>
	import Leftside from '$components/leftside.svelte';
	import { onMount } from 'svelte';

	let lineWidth = '100%'; // Starting width of the colored line

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
</script>

<nav>
	<Leftside />
</nav>

<main>
	<!-- <div class="colored-line" style="width: {lineWidth};" /> -->

	<slot />
</main>

<footer />

<style lang="scss">
	@import '$styles/global.css';

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
		z-index: 10;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}

	main {
		flex-grow: 1;
	}

	.colored-line {
		height: 4px;
		background-color: $primary-red; /* Your chosen color */
		position: fixed;
		top: 0;
		left: 0;
		transition: width 0.25s ease-out;
		z-index: 100; /* Ensure it's above other content */
	}
</style>
