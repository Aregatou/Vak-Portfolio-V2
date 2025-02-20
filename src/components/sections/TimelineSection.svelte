<script lang="ts">
	import { fadeIn, lazyLoadImage, timelineExperiences } from '$lib';
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';

	const collapsedHeight = 665;

	let showFullTimeline = false;
	let timelineContainer;

	const animateMaxHeight = (from, to, cleanup = false) => {
		timelineContainer.style.maxHeight = from + 'px';
		requestAnimationFrame(() => {
			timelineContainer.style.maxHeight = to + 'px';
		});
		if (cleanup) {
			timelineContainer.addEventListener('transitionend', function handler(e) {
				if (e.propertyName === 'max-height') {
					timelineContainer.style.maxHeight = '';
					timelineContainer.removeEventListener('transitionend', handler);
				}
			});
		}
	};

	const toggleTimeline = () => {
		if (!timelineContainer) return;

		if (!showFullTimeline) {
			const fullHeight = timelineContainer.scrollHeight;
			animateMaxHeight(collapsedHeight, fullHeight, true);
		} else {
			const currentHeight = timelineContainer.scrollHeight;
			animateMaxHeight(currentHeight, collapsedHeight);
		}
		showFullTimeline = !showFullTimeline;
	};

	onMount(() => {
		if (timelineContainer && !showFullTimeline) {
			timelineContainer.style.maxHeight = collapsedHeight + 'px';
		}
	});
</script>

<section id="timeline">
	<div class="section-content">
		<div bind:this={timelineContainer} class="timeline-container">
			{#each timelineExperiences as item, i (item.organization + '-' + item.period)}
				<div
					animate:flip={{ duration: (d) => d * 0.5 }}
					class="timeline-item-wrapper"
					class:last-visible={!showFullTimeline &&
						i === Math.ceil(timelineExperiences.length / 2) - 1}
				>
					<div class="timeline-item" use:fadeIn class:alternate={i % 2 !== 0}>
						<div class="timeline-content left">
							<h3><a href={item.link} target="_blank">{item.organization}</a></h3>
							<p>{item.period}</p>
						</div>
						<div class="timeline-content right">
							<a href={item.link} target="_blank">
								<div class="image-container {item.small}">
									<img src={item.img} alt={item.alt} use:lazyLoadImage />
								</div>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="timeline-toggle">
		<button on:click={toggleTimeline} class="outlined" class:expanded={showFullTimeline}>
			{showFullTimeline ? 'Show Less' : 'Show All'}
		</button>
	</div>
</section>

<style lang="scss">
	@use 'sass:color';
	#timeline {
		.section-content {
			position: relative;
			width: 90%;
			margin: 0 auto;
			padding: 0;
			overflow: hidden;
			padding-top: 0;
		}

		.timeline-container {
			position: relative;
			overflow: hidden;
			transition: max-height 0.5s ease;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				bottom: 0;
				left: calc(50% - 1px);
				width: 3px;
				background-color: $white;
				transform: translateX(-50%);
				z-index: 0;
			}
		}

		.timeline-item-wrapper {
			opacity: 1;
			transform: translateY(0);
			transition: opacity 0.5s ease, transform 0.5s ease;

			&.last-visible {
				mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
				-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
			}
		}

		.timeline-item {
			display: grid;
			grid-template-columns: 50% 50%;
			margin: 0;
			position: relative;
			align-items: center;
			transition: bottom 0.3s ease;
			bottom: 0;

			&:hover {
				bottom: 10px;
			}

			.timeline-content {
				padding: 0.7rem;
				border-radius: 4px;
				font-family: $font-med;
				position: relative;

				&.left {
					text-align: right;
					padding-right: 2rem;
				}
				&.right {
					display: flex;
					flex-direction: column;
					font-size: 1.5rem;
					align-items: flex-start;
					text-align: left;
					padding-left: 2rem;

					.image-container {
						max-width: 300px;
						display: flex;
						align-items: center;
						justify-content: center;
						background: $white;
						/* background: var(--container-bg); */
						padding: 1rem;
						border-radius: $curve-border;
						transition: box-shadow 0.3s ease;

						img {
							width: 100%;
						}

						&.img-shrink {
							width: 150px;
						}
					}
					a {
						overflow: initial;
						&:hover {
							text-shadow: none;
							&::after {
								display: none;
							}
						}
					}
				}
			}

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 12px;
				height: 12px;
				background: #fff;
				border: 2px solid #ccc;
				border-radius: 50%;
				z-index: 1;
			}

			&:hover {
				.image-container {
					box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
				}
				&::after {
					background: $primary-orange;
				}
			}
		}

		.timeline-toggle {
			display: flex;
			justify-content: center;
			margin-top: 0;
			position: relative;
			z-index: 2;
			button {
				background: $denim-black;
				color: white;
				border: none;
				padding: 0.8rem 1.5rem;
				border-radius: 5px;
				cursor: pointer;
				font-family: $font-bold;
				transition: background 0.3s ease;
				font-size: 1.3rem;
				&:hover {
					background: color.adjust($primary-orange, $lightness: -10%);
				}
				&.expanded {
				}
			}
		}
	}
</style>
