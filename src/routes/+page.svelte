<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Carousel from '$components/carousel.svelte';
	import About from '$components/about.svelte';
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

<div class="intro-container">
	<div class="colored-line" style="width: {lineWidth};" />

	<Carousel />
	<About />
</div>

<style lang="scss">
	.intro-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.colored-line {
		height: 4px;
		background-color: $primary-orange; /* Your chosen color */
		position: fixed;
		top: 0;
		left: 0;
		transition: width 0.25s ease-out;
		z-index: 100; /* Ensure it's above other content */
	}
</style>
