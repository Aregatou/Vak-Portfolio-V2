<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';
	let carouselVisible = false;
	let activeCaption = '';

	const captions = [
		'Caption for First Slide',
		'Caption for Second Slide',
		'Caption for Third Slide'
		// ...add as many captions as there are slides
	];

	function updateCaption(index) {
		activeCaption = captions[index];
	}
	onMount(() => {
		carouselVisible = true;
		updateCaption(0);
	});
</script>

<section
	class="carousel-container"
	id="home"
	class:fadeIn={carouselVisible}
	role="region"
	aria-label="Carousel of images"
>
	<div class="color-overlay" />

	<Splide
		aria-label="Photos of Vak"
		options={{
			type: 'loop',
			autoplay: true,
			interval: 4000,
			pauseOnHover: false
		}}
		on:mounted={({ detail }) => updateCaption(detail.index)}
		on:move={({ detail }) => updateCaption(detail.index)}
	>
		<SplideSlide class="splideSlide">
			<img src="/images/car-1.jpg" alt="Vak snowboarding in a suit" class="carousel-image" />
		</SplideSlide>
		<SplideSlide class="splideSlide">
			<img
				src="/images/car-2.jpg"
				alt="Vak dancing at a wedding"
				class="carousel-image move-left"
			/>
		</SplideSlide>
		<SplideSlide class="splideSlide">
			<img
				src="/images/car-3.jpg"
				alt="Vak jumping out of ice water"
				class="carousel-image move-left"
			/>
		</SplideSlide>
	</Splide>
	<div class="splide-caption">
		{activeCaption}
	</div>
	<div class="carousel-text">
		<h1>Hey, I'm vak.com</h1>
		<h3>UI/UX & Web Designer</h3>
	</div>
</section>

<style lang="scss">
	$zindex-overlay: 1;
	$zindex-content: 2;

	.carousel-container {
		width: 100%;
		color: $white;
		position: relative;
		animation: fadeIn 1s ease-out forwards;
		border-radius: 0 20px 20px 0;
		overflow: hidden;

		.color-overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			filter: grayscale(80%);
			background-color: rgba(224, 67, 67, 0.5);
			mix-blend-mode: saturate;
			z-index: $zindex-overlay;
			pointer-events: none;
		}
		.carousel-image {
			width: 100%;
			object-fit: cover;
			height: 100vh;
			transition: $ease-transform;

			&:hover {
				transform: scale(1.03);
			}
			&.move-left {
				object-position: 30% 50%;
			}
		}

		.carousel-text {
			position: absolute;
			top: 50%;
			left: 50%;
			color: $white;
			transform: translate(-50%, -50%);
			text-align: center;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
			z-index: $zindex-content;
		}
	}

	.splide-caption {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		color: $primary-red;
		padding: 1em;
		text-align: center;
	}

	@media (prefers-reduced-motion: reduce) {
		.carousel-container {
			animation: none;
		}
	}
</style>
