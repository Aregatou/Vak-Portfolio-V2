<script>
	import { fadeIn, lazyLoadImage } from '$lib';
	import { flip } from 'svelte/animate';

	let timelineItems = [
		{
			organization: 'NCBI',
			period: '2022 - present',
			img: '/images/logos/ncbi.png',
			alt: 'NCBI logo',
			link: 'https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/',
			small: '',
			description: 'National Center for Biotechnology Information'
		},
		{
			organization: 'NIBIB',
			period: '2020 - 2022',
			img: '/images/logos/nibib.jpg',
			alt: 'Logo for the National Institute of Biomedical Imaging and Bioengineering',
			link: 'https://www.nibib.nih.gov/',
			small: '',
			description: 'National Institute of Biomedical Imaging and Bioengineering'
		},
		{
			organization: 'CDC',
			period: '2018 - 2020',
			img: '/images/logos/cdc.png',
			alt: 'Logo for the Center for Disease Control',
			link: 'https://www.cdc.gov/index.htm',
			small: 'img-shrink',
			description: 'Center for Disease Control'
		},
		{
			organization: 'NIDA',
			period: '2018 - 2022',
			img: '/images/logos/nida.png',
			alt: 'Logo for the National Institute on Drug Abuse',
			link: 'https://www.nidcd.nih.gov/',
			small: '',
			description: 'National Institute on Drug Abuse'
		},
		{
			organization: 'NIAMS',
			period: '2018 - 2019',
			img: '/images/logos/niams.png',
			alt: 'Logo for the National Institute of Arthritis and Musculoskeletal and Skin Diseases',
			link: 'https://www.niams.nih.gov/',
			small: '',
			description: 'National Institute of Arthritis and Musculoskeletal and Skin Diseases'
		},
		{
			organization: 'NIAAA',
			period: '2017 - 2019',
			img: '/images/logos/niaaa.png',
			alt: 'Logo for the National Institute of Alcohol Abuse and Alcoholism',
			link: 'https://www.niaaa.nih.gov/',
			small: '',
			description: 'National Institute of Alcohol Abuse and Alcoholism'
		},
		{
			organization: 'NIDCD',
			period: '2017 - 2018',
			img: '/images/logos/nidcd.png',
			alt: 'Logo for the National Institute on Deafness and Other Communication Disorders',
			link: 'https://www.nidcd.nih.gov/',
			small: '',
			description: 'National Institute on Deafness and Other Communication Disorders'
		},
		{
			organization: 'NIDCR',
			period: '2017 - 2018',
			img: '/images/logos/nidcr.png',
			alt: 'Logo for the National Institute of Dental and Craniofacial Research',
			link: 'https://www.nidcr.nih.gov/',
			small: '',
			description: 'National Institute of Dental and Craniofacial Research'
		},
		{
			organization: 'SAMHSA',
			period: '2017 - 2018',
			img: '/images/logos/samhsa.png',
			alt: 'Logo for the Substance Abuse and Mental Health Services Administration',
			link: 'https://www.samhsa.gov/',
			small: '',
			description: 'Substance Abuse and Mental Health Services Administration'
		},
		{
			organization: 'ODP',
			period: '2017 - 2018',
			img: '/images/logos/odp.png',
			alt: 'Logo for the Office of Disease Prevention',
			link: 'https://prevention.nih.gov/',
			small: '',
			description: 'Office of Disease Prevention'
		}
	];

	let showFullTimeline = false;
</script>

<section id="timeline" class="about-section">
	<div
		class="about-section-content"
		class:collapsed={!showFullTimeline}
		class:expanded={showFullTimeline}
	>
		<div class="timeline-container">
			{#each timelineItems.slice(0, showFullTimeline ? timelineItems.length : Math.ceil(timelineItems.length / 2)) as item, i (item.organization + '-' + item.period)}
				<div
					animate:flip={{ duration: (d) => d * 0.5 }}
					class="timeline-item-wrapper"
					class:last-visible={!showFullTimeline && i === Math.ceil(timelineItems.length / 2) - 1}
				>
					<div class="timeline-item" use:fadeIn class:alternate={i % 2 !== 0}>
						<div class="timeline-content left">
							<h3>
								<a href={item.link} target="_blank">{item.organization}</a>
							</h3>
							<p>{item.period}</p>
						</div>
						<div class="timeline-content right">
							<a href={item.link} target="_blank">
								<div class="image-container {item.small}">
									<img src={item.img} alt={item.alt} use:lazyLoadImage loading="lazy" />
								</div>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="timeline-toggle">
		<button on:click={() => (showFullTimeline = !showFullTimeline)}>
			{showFullTimeline ? 'Show Less' : 'Show More'}
		</button>
	</div>
</section>

<style lang="scss">
	.about-section {
		@include about-section-styles();

		.about-section-content {
			padding-top: 0;
			position: relative;
			width: 90%;
			margin: 0 auto;
			padding: 1rem 0;

			&:before {
				content: '';
				position: absolute;
				top: 0;
				bottom: 0;
				left: 50%;
				width: 2px;
				background: white;
			}

			&.collapsed {
				&:before {
					mask-image: linear-gradient(
						to bottom,
						rgba(255, 255, 255, 1) 70%,
						rgba(255, 255, 255, 0) 100%
					);
					-webkit-mask-image: linear-gradient(
						to bottom,
						rgba(255, 255, 255, 1) 70%,
						rgba(255, 255, 255, 0) 100%
					);
					transition: mask-image 0.5s ease, -webkit-mask-image 0.5s ease;
				}
			}
			&.expanded {
				.timeline-toggle {
					margin-top: 0;
				}
				&:before {
					mask-image: none;
					-webkit-mask-image: none;
				}
			}
			.timeline-container {
				position: relative;
			}
			.timeline-item-wrapper.last-visible {
				mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
				-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 70%);
				transition: mask-image 0.5s ease, -webkit-mask-image 0.5s ease;
			}

			.timeline-item-wrapper.last-visible.expanded {
				mask-image: none;
				-webkit-mask-image: none;
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
					font-weight: 600;
					transition: text-shadow 0.2s ease;
					position: relative;

					&.left {
						text-align: right;
						padding-right: 2rem;
						padding-left: 0;

						h3 {
							font-size: 1.5rem;
							margin: 0;
						}
					}

					&.right {
						display: flex;
						flex-direction: column;
						font-size: 1.5rem;
						align-items: flex-start;
						text-align: left;
						padding-left: 2rem;
						padding-right: 0;

						.image-container {
							max-width: 300px;
							display: flex;
							align-items: center;
							justify-content: center;
							background: $white;
							padding: 1rem;
							border-radius: $curve-border;
							transition: box-shadow 0.2 ease;

							img {
								width: 100%;
							}

							&.img-shrink {
								width: 150px;
							}
						}
					}
				}

				&:after {
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
					&:after {
						transition: background 0.3s ease;
						background: $primary-orange;
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
				background: $primary-orange;
				color: white;
				border: none;
				padding: 0.8rem 1.5rem;
				border-radius: 5px;
				cursor: pointer;
				font-weight: bold;
				transition: background 0.3s ease;

				&:hover {
					background: darken($primary-orange, 10%);
				}
			}
		}
	}
</style>
