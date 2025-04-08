<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { lazyLoadImage } from '$lib';

	export let loadingMessage = '';
	export let loading = false;

	let activeIndex = 0;

	const captions = [
		'Developer with a strong focus on visually appealing designs',
		'8 years of experience working with over a dozen health organizations',
		'Currently hosting this site on a docker container running on my home Unraid server',
		'I build things in real life too'
	];

	const updateCaption = (event) => {
		activeIndex = event.detail.index;
	};
</script>

<section class="carousel" id="home" aria-label="Carousel of images">
	<div class="color-overlay" />

	<Splide
		aria-label="Photos of Vak"
		on:move={updateCaption}
		options={{
			type: 'loop',
			autoplay: true,
			interval: 4000,
			pauseOnHover: false
		}}
	>
		<SplideSlide
			><img
				src="/images/car-1.jpg"
				alt="Vak snowboarding in a suit"
				class="carousel-image"
				use:lazyLoadImage
				loading="lazy"
			/></SplideSlide
		>
		<SplideSlide
			><img
				src="/images/car-2.jpg"
				alt="Vak dancing at a wedding"
				class="carousel-image move-left"
				use:lazyLoadImage
				loading="lazy"
			/></SplideSlide
		>
		<SplideSlide
			><img
				src="/images/car-3.jpg"
				alt="Vak jumping out of ice water"
				class="carousel-image move-left"
				use:lazyLoadImage
				loading="lazy"
			/></SplideSlide
		>
		<SplideSlide
			><img
				src="/images/car-4.jpg"
				alt="Stunningly beautiful large woodworking art piece"
				class="carousel-image move-left"
				use:lazyLoadImage
				loading="lazy"
			/></SplideSlide
		>
	</Splide>

	<div class="splide-caption">{captions[activeIndex] || captions[0]}</div>

	<div class="carousel-text">
		<h1>
			<span class="subtle">Hey,</span>
			<span class="accent">I<span class="subtle">'</span>m vak.com</span>
		</h1>
	</div>

	{#if loading}
		<div class="carousel-loading">
			<div class="spinner" />
			<p>{loadingMessage}</p>
		</div>
	{/if}
</section>

<style lang="scss">
	.carousel {
		width: 100%;
		align-self: stretch;
		position: relative;
		border-radius: 0 20px 20px 0;
		overflow: hidden;
		min-height: 250px;
		z-index: 1;
		color: $white;

		.color-overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: var(--carousel-overlay);
			mix-blend-mode: saturate;
			filter: grayscale(70%);
			z-index: 1;
			pointer-events: none;
		}

		.carousel-image {
			width: 100%;
			height: 100vh;
			object-fit: cover;
			object-position: center bottom;
			transition: $ease-transform;

			&:hover {
				transform: scale(1.02);
			}

			&.move-left {
				object-position: 30%;
			}
		}

		.splide-caption {
			position: absolute;
			top: 54%;
			left: 50%;
			transform: translateX(-50%);
			text-align: center;
			color: $white-transparent;
			padding: 1em;
			font-family: $font-bold;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
			font-size: 1.2rem;
			z-index: 3;
			pointer-events: none;
		}
		.carousel-text {
			position: absolute;
			top: 50%;
			left: 50%;
			color: $white;
			transform: translate(-50%, -50%);
			text-align: center;
			z-index: 2;
			font-size: 1.7rem;
			font-family: $font-bold;
			text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
			pointer-events: none;
			width: 80%;
			line-height: initial;
			@include respond-to(desktop) {
				width: 100%;
				font-size: 2rem;
			}
			span {
				&.subtle {
					opacity: 0.6;
				}

				&.accent {
					border-bottom: 5px solid $primary-red;
				}
			}
		}
		.carousel-loading {
			position: absolute;
			bottom: 10%;
			z-index: 3;
			width: 100%;
			p {
				text-align: center;
			}
			.spinner {
				border: 4px solid rgba(255, 255, 255, 0.3);
				border-top: 4px solid white;
				border-radius: 50%;
				width: 20px;
				height: 20px;
				animation: spin 1s linear infinite;
				margin: 0 auto;
			}
			@keyframes spin {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}
		}
	}

	:global(.splide__pagination) {
		bottom: 80px;
	}

	@media screen and (max-height: 600px) {
		:global(.splide__pagination) {
			display: none;
		}

		.splide-caption {
			width: 100%;
		}
	}
</style>
