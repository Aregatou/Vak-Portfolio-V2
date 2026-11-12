<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { onMount, tick } from 'svelte';

	export let images = [];

	let mainSplide;
	let thumbsSplide;

	let mainOptions = {
		type: 'slide',
		rewind: false,
		autoplay: false,
		pagination: false,
		arrows: true
	};

	let thumbOptions = {
		fixedWidth: 100,
		fixedHeight: 100,
		gap: 10,
		rewind: false,
		isNavigation: true,
		focus: 0,
		autoplay: false,
		pagination: false,
		arrows: true,
		direction: 'ttb',
		height: 500,
		breakpoints: {
			480: {
				direction: 'ltr',
				fixedWidth: 64,
				fixedHeight: 64,
				arrows: false
			}
		}
	};

	onMount(async () => {
		await tick();
		if (mainSplide?.splide && thumbsSplide?.splide) {
			mainSplide.splide.sync(thumbsSplide.splide);
		}
	});

	let bgPosX = 50;
	let bgPosY = 50;
	let zoomed = false;

	const handleMouseMove = (e) => {
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
		bgPosX = ((e.clientX - left) / width) * 100;
		bgPosY = ((e.clientY - top) / height) * 100;
	};

	const handleMouseEnter = () => {
		zoomed = true;
	};

	const handleMouseLeave = () => {
		zoomed = false;
		bgPosX = 50;
		bgPosY = 50;
	};
</script>

<section id="modal-container" class="gallery-container" aria-label="Gallery of woodworking images">
	<div class="gallery-wrapper">
		<div class="gallery-thumbs-wrapper">
			<Splide bind:this={thumbsSplide} options={thumbOptions} class="gallery-thumbs">
				{#each images as image}
					<SplideSlide>
						<img src={image.src} alt={image.alt} class="gallery-thumb-image" loading="lazy" fetchpriority="low" />
					</SplideSlide>
				{/each}
			</Splide>
		</div>
		<div class="gallery-main">
			<Splide bind:this={mainSplide} options={mainOptions}>
				{#each images as image, index}
					<SplideSlide>
						<div
							class="zoom-container"
							on:mouseenter={handleMouseEnter}
							on:mousemove={handleMouseMove}
							on:mouseleave={handleMouseLeave}
						>
							<img
								src={image.src}
								alt={image.alt}
								loading={index === 0 ? 'eager' : 'lazy'}
								fetchpriority={index === 0 ? 'high' : 'auto'}
								style:transform={zoomed ? 'scale(2)' : 'none'}
								style:transform-origin="{bgPosX}% {bgPosY}%"
							/>
						</div>
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
</section>

<style lang="scss">
	#modal-container.gallery-container {
		margin: 0 auto;
		padding: 1rem;
	}

	.gallery-wrapper {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		width: 100%;
	}

	.gallery-main {
		flex: 1;
	}

	.gallery-thumbs-wrapper {
		width: 100px;
	}

	.zoom-container {
		width: 100%;
		height: 500px;
		overflow: hidden;

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: contain;
			transition: transform 0.2s ease-out, transform-origin 0.2s ease-out;
		}
	}

	@include respond-to(extra-small) {
		.gallery-wrapper {
			flex-direction: column-reverse;
		}

		.gallery-thumbs-wrapper {
			width: 100%;
		}

		.zoom-container {
			height: min(85vw, 50vh);
		}
	}

	.gallery-thumb-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		cursor: pointer;
		transition: border-color 0.3s ease;
	}
	.gallery-thumb-image:hover {
		border-color: #e04343;
	}
</style>
