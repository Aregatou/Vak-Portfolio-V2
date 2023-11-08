<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Carousel from '$components/carousel.svelte';
	import About from '$components/about.svelte';
</script>

<div class="intro-container">
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
</style>
