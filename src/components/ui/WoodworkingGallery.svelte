<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
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
		arrows: true
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

<section id="gallery" class="gallery-container" aria-label="Gallery of woodworking images">
	<Splide bind:this={mainSplide} options={mainOptions}>
		{#each images as image}
			<SplideSlide>
				<div
					class="zoom-container"
					on:mouseenter={handleMouseEnter}
					on:mousemove={handleMouseMove}
					on:mouseleave={handleMouseLeave}
					style="background-image: url({image.src}); 
					   background-position: {bgPosX}% {bgPosY}%;
					   background-size: {zoomed ? '150%' : 'contain'};"
					role="img"
					aria-label={image.alt}
				>
					<span class="sr-only">{image.alt}</span>
				</div>
			</SplideSlide>
		{/each}
	</Splide>

	<Splide bind:this={thumbsSplide} options={thumbOptions} class="gallery-thumbs">
		{#each images as image}
			<SplideSlide>
				<img src={image.src} alt={image.alt} class="gallery-thumb-image" loading="eager" />
			</SplideSlide>
		{/each}
	</Splide>
</section>

<style lang="scss">
	#gallery.gallery-container {
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
		position: relative;
		padding: 0;
	}

	.zoom-container {
		width: calc(100% - 100px);
		height: 500px;
		margin: 0 auto;
		box-sizing: border-box;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		transition: background-size 0.2s ease-out, background-position 0.2s ease-out;
	}

	:global(.gallery-thumbs) {
		margin-top: 1rem;
		/* :global(.splide__list) {
			justify-content: center;
		} */
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
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
