<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Carousel from '$components/carousel.svelte';
</script>

<div class="intro-container" id="home">
	<div>
		<Carousel />
	</div>
</div>

<style lang="scss">
	.intro-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		h1 {
			font-size: 60px;
			margin-bottom: 20px;
		}
		h3 {
			margin: 16px 0;
		}
	}
</style>
