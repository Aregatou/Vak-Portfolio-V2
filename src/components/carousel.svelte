<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';
	let carouselVisible = false;
	let activeCaption = '';

	const captions = [
		'Developer with a strong focus on visually appealing designs',
		'8 years of experience working with over a dozen health organizations',
		'Currently hosting this site on a docker container running on my home unRaid server',
		'I build things in real life too'
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
		<SplideSlide class="splideSlide">
			<img
				src="/images/car-4.jpg"
				alt="Stunningly beautiful large woodworking art piece"
				class="carousel-image move-left"
			/>
		</SplideSlide>
	</Splide>
	<div class="splide-caption">
		{activeCaption}
	</div>
	<div class="carousel-text">
		<h1>
			<span class="subtle">Hey,</span>
			<span class="accent">I<span class="subtle">'</span>m vak.com</span>
		</h1>
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
		min-height: 250px;

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
				transform: scale(1.02);
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
			font-size: 2rem;
			pointer-events: none;
			font-family: 'Quicksand-bold';
			span {
				pointer-events: none;
				&.subtle {
					opacity: 0.6;
				}
				&.accent {
					border-bottom: 5px solid $primary-red;
				}
			}
		}
	}

	.splide-caption {
		position: absolute;
		top: 54%;
		left: 50%;
		transform: translateX(-50%);
		color: $white-transparent;
		padding: 1em;
		text-align: center;
		font-family: 'Quicksand-bold';
		text-shadow: $text-shadow;
		font-size: 1.2rem;
		z-index: 3;
		pointer-events: none;
	}
	:global(.splide__pagination) {
		bottom: 80px;
	}

	@media (prefers-reduced-motion: reduce) {
		.carousel-container {
			animation: none;
		}
	}
	@media screen and (max-height: 600px) {
		.carousel-container {
			.carousel-text {
				top: 40px;
			}
			:global(.splide__pagination) {
				display: none;
			}
		}

		.splide-caption {
			width: 100%;
		}
	}
</style>
