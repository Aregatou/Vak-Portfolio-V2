<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
</script>

<div class="carousel-container">
	<div class="color-overlay" />

	<Splide
		aria-label="My Favorite Images"
		options={{
			rewind: true,
			gap: '1rem'
		}}
	>
		<SplideSlide>
			<img src="/images/car-1.jpg" alt="Vak snowboarding in a suit" class="carousel-image" />
		</SplideSlide>
		<SplideSlide>
			<img src="/images/car-2.jpg" alt="Vak dancing at a wedding" class="carousel-image" />
		</SplideSlide>
		<SplideSlide>
			<img
				src="/images/car-3.jpg"
				alt="Vak jumping out of ice water"
				class="carousel-image move-left"
			/>
		</SplideSlide>
	</Splide>
	<div class="carousel-text">
		<h1>Hey, I'm vak.com</h1>
		<h3>UI/UX & Web Designer</h3>
	</div>
</div>

<style lang="scss">
	.carousel-container {
		width: 100%;
		position: relative;
		.color-overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			filter: grayscale(80%);
			background-color: rgba(255, 0, 0, 0.5);
			mix-blend-mode: saturate;
			z-index: 1;
		}
		.carousel-image {
			width: 100%;
			object-fit: cover;
			height: 100vh;
			&.move-left {
				object-position: 30% 50%;
			}
		}

		.carousel-text {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: white;
			text-align: center;
			z-index: 2;
		}
	}
</style>
