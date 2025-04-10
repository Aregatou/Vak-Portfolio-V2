<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let mode = 'icon';
	export let image;
	export let svgMarkup;
	export let title;
	export let description;
	export let color = '#e04343';
	export let hoverColor = 'white';

	let svgContent = '';

	const loadSVG = async () => {
		try {
			const response = await fetch(svgMarkup);
			if (!response.ok) throw new Error(`Failed to load SVG: ${svgMarkup}`);
			let rawSVG = await response.text();
			svgContent = rawSVG.replace(/fill="currentColor"/g, '');
		} catch (error) {
			console.error(error);
		}
	};

	onMount(() => {
		if (mode === 'icon' && svgMarkup) {
			loadSVG();
		}
	});

	const handleClick = (event) => {
		console.log('Card clicked:', title);
		dispatch('cardclick', event);
	};
</script>

<div
	class="card {mode === 'gallery' ? 'gallery-mode' : 'card-mode'}"
	style={`--svg-color: ${color}; --hover-svg-color: ${hoverColor};`}
	on:click={handleClick}
	role="button"
	tabindex="0"
	on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick(e)}
>
	<div class="card-image">
		{#if mode === 'gallery' && image}
			<img src={image} alt={title + ' preview'} class="card-hero-image" loading="lazy" />
			<!-- <img src={image} alt={title + ' preview'} class="card-hero-image" loading="lazy" /> -->
		{:else}
			<div class="card-image-circle">
				<div class="card-icon-container">
					{@html svgContent}
				</div>
			</div>
		{/if}
	</div>
	<div class="card-content">
		<h2 class="card-title">{title}</h2>
		<p class="card-description">{description}</p>
	</div>
</div>

<style lang="scss">
	.card {
		text-decoration: none;
		color: inherit;
		display: flex;

		--card-svg-color: var(--svg-color);
		flex-direction: row;
		align-items: flex-start;

		&.gallery-mode {
			max-width: 250px;
			flex-direction: column;
			align-items: center;
			background: var(--svg-color);
			color: $white;
			border-radius: $curve-border;
			border: 2px solid $dark-purple;
			cursor: pointer;
			transition: box-shadow 0.3s ease;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
			bottom: 0;
			transition: bottom 0.3s ease, box-shadow 0.3s ease;
			position: relative;
			&:hover {
				box-shadow: 0 6px 18px rgba(0, 0, 0, 0.65);
			}
			.card-image {
				width: 100%;
				aspect-ratio: 1;
				overflow: hidden;
				border-radius: $curve-border;

				.card-hero-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 5px;
					transform: scale(1.2);
					transition: transform 0.3s ease;
					&:hover {
						/* transform: scale(1.3); */
						transition: opacity 0.3s ease;
						opacity: 0;
					}
				}
			}
			.card-content {
				padding: 0.5rem;
				bottom: -20px;
				position: absolute;
				transition: bottom 0.3s ease, opacity 0.3s ease;
				/* transition: opacity 0.3s ease; */

				opacity: 0;

				h2 {
					margin-top: 0;
					font-size: 1.3rem;
				}
			}
			&:hover {
				.card-content {
					bottom: 0;
					opacity: 1;
				}
			}
		}

		&:hover {
			--card-svg-color: var(--hover-svg-color);
			.card-image-circle {
				background: $primary-red;
				color: var(--white);
				:global(svg) {
					transform: scale(1.15);
				}
			}
		}

		&.card-mode {
			.card-image {
				display: flex;
				justify-content: center;
				padding: $pad-1;
				padding-bottom: 0;
				.card-image-circle {
					border: 4px solid $primary-red;
					border-radius: 50%;
					padding: $pad-1 * 2;
					width: 40px;
					height: 40px;
					color: var(--card-svg-color);
					transition: $ease-transform, background-color 0.3s ease, color 0.3s ease;
					:global(svg) {
						fill: currentColor;
						width: 100%;
						height: 100%;
						transition: transform 0.3s ease, fill 0.3s ease;
						transform-origin: center;
					}
				}
			}

			.card-content {
				/* padding: $pad-1; */
				.card-title {
					margin: 0;
					text-align: left;
					font-size: 1.2rem;
				}
				.card-description {
					/* margin-bottom: 0; */
				}
			}

			@include respond-to(desktop) {
				flex-direction: column;
				align-items: stretch;
				flex: 1;

				.card-image {
					margin-right: $pad-1;
					padding: $pad-1 0 $pad-1 0;
					justify-content: flex-start;
					margin: 0 auto;

					.card-image-circle {
						width: 70px;
						height: 70px;
					}
				}

				.card-content {
					flex: 1;
					display: flex;
					flex-direction: column;
					/* padding: $pad-1; */
					position: relative;

					.card-title {
						text-align: center;
						min-height: 60px;
						font-size: 1.5rem;
						margin-top: 0;
					}

					.card-description {
						font-size: 1.05rem;
						text-align: center;
					}
				}
			}
		}
	}
</style>
