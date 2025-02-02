<script>
	import { fade } from 'svelte/transition';

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
</script>

<div class="timeline-container">
	{#each timelineItems as item, i (item.organization + '-' + item.period)}
		<div class="timeline-item fade-in-section" in:fade class:alternate={i % 2 !== 0}>
			<!-- {#if i % 2 === 0}
				<div class="timeline-content organization">
					<div class="image-container {item.small}">
						<a href={item.link} target="_blank"><img src={item.img} alt={item.alt} /></a>
					</div>
				</div>
				<div class="timeline-content period">
					<h3>{item.organization}</h3>
					<p>{item.period}</p>
				</div>
			{:else} -->
			<div class="timeline-content left">
				<h3><a href={item.link} target="_blank">{item.organization}</a></h3>
				<p>{item.period}</p>
			</div>
			<div class="timeline-content right">
				<a href={item.link} target="_blank">
					<div class="image-container {item.small}">
						<img src={item.img} alt={item.alt} />
					</div>
				</a>
			</div>
			<!-- {/if} -->
		</div>
	{/each}
</div>

<style lang="scss">
	.timeline-container {
		position: relative;
		width: 90%;
		margin: 0 auto;
		padding: 1rem 0;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 50%; /* Adjust this value to push the layout left */
			width: 2px;
			background: white;
		}

		.timeline-item {
			display: grid;
			grid-template-columns: 50% 50%;
			margin: 0;
			position: relative;
			align-items: center;
			.timeline-content {
				padding: .7rem;
				border-radius: 4px;
				font-weight: 600;
				transition: text-shadow 0.2s ease;
				position:relative;
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
						img {
							width: 100%;
						}
						&.img-shrink {
							width: 150px;
						}
					}
				}

			}
			&:hover {
				&:after {
					background: $primary-orange;
					transition: background 0.2s ease;

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
				bottom: 2px;
				transform: translateY(-2px);
				.image-container {
					box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);

				}
				// text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
			}
		}
	}
	/* Adjust grid columns so the left side is smaller */
</style>
