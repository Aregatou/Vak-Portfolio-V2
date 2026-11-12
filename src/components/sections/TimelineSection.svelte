<script lang="ts">
	import { timelineExperiences } from '$lib';

	const midpoint = Math.ceil(timelineExperiences.length / 2);
	const timelineGroups = [timelineExperiences.slice(0, midpoint), timelineExperiences.slice(midpoint)];
	let showFullTimeline = false;
</script>

<section id="timeline">
	<div class="section-content">
		<div id="client-timeline" class="timeline-container" class:expanded={showFullTimeline}>
			{#each timelineGroups as group, groupIndex}
				<div class="timeline-group" inert={groupIndex === 1 && !showFullTimeline}>
					{#each group as item, i (item.organization + '-' + item.period)}
						<div
							class="timeline-item-wrapper"
							class:last-visible={!showFullTimeline &&
								groupIndex === 0 && i === group.length - 1}
						>
							<div class="timeline-item">
								<div class="timeline-content left">
									<h3><a href={item.link} target="_blank">{item.organization}</a></h3>
									<p>{item.period}</p>
								</div>
								<div class="timeline-content right">
									<a href={item.link} target="_blank">
										<div class="image-container {item.small}">
											<img src={item.img} alt={item.alt} loading="lazy" />
										</div>
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<div class="timeline-toggle">
		<button
			on:click={() => (showFullTimeline = !showFullTimeline)}
			class="outlined"
			aria-expanded={showFullTimeline}
			aria-controls="client-timeline"
		>
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
			display: grid;
			grid-template-rows: max-content 0fr;
			transition: grid-template-rows 0.5s ease;

			&.expanded {
				grid-template-rows: max-content 1fr;
			}

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

		.timeline-group:last-child {
			min-height: 0;
			overflow: hidden;
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
						padding: 1rem;
						border-radius: $curve-border;
						transition: box-shadow 0.3s ease;

						img {
							width: 100%;
						}

						&.img-shrink {
							width: 150px;

							@include respond-to(mobile) {
								box-sizing: border-box;
								width: min(calc(150px + 2rem), 100%);
							}
						}
					}
					a {
						overflow: initial;

						@include respond-to(mobile) {
							max-width: 100%;
						}

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

		@include respond-to(extra-small) {
			$timeline-axis: 7.75rem;

			.section-content {
				width: 100%;
			}

			.timeline-container::before,
			.timeline-item::after {
				left: $timeline-axis;
			}

			.timeline-item-wrapper.last-visible {
				-webkit-mask-image: none;
				mask-image: none;
			}

			.timeline-item {
				grid-template-columns: $timeline-axis minmax(0, 1fr);

				.timeline-content {
					padding: 0.5rem 0;

					&.left {
						padding-right: $pad-1;

						h3 {
							margin: 0 0 0.25rem;
						}

						p {
							margin: 0;
						}
					}

					&.right {
						padding-left: $pad-1;

						a {
							width: 100%;
						}

						.image-container {
							box-sizing: border-box;
							padding: 0.5rem;

							&.img-shrink {
								width: min(150px, 100%);
							}
						}
					}
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
			}
		}
	}
</style>
