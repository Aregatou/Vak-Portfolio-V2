<script>
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Card from '$components/display-card.svelte';
	import TechCard from '$components/tech-card.svelte';
	import ProgressBar from '$components/progress-bar.svelte';
	import Clients from '$components/clients.svelte';
	import Timeline from '$components/timeline.svelte';
	import { SVGIcons } from '$lib/svgList.js';

	const frontEndSkills = [
		{ title: 'JavaScript', svgMarkup: SVGIcons.javascript, color: '#f7df1e', percentage: 100 },
		{ title: 'HTML / CSS', svgMarkup: SVGIcons.html, percentage: 100 },
		{ title: 'Svelte', svgMarkup: SVGIcons.svelte, color: '#ff794c', percentage: 90 },
		{ title: 'Angular', svgMarkup: SVGIcons.angular, color: '#dd1b16', percentage: 70 },
		{ title: 'React', svgMarkup: SVGIcons.react, color: '#149eca', percentage: 55 },
		{ title: 'TypeScript', svgMarkup: SVGIcons.typescript, color: '#7fa2c9', percentage: 72 },
		{ title: 'jQuery', svgMarkup: SVGIcons.jquery, color: '#0769ad', percentage: 82 },
		{ title: 'SASS/SCSS', svgMarkup: SVGIcons.sass, color: '#CF649A', percentage: 90 }
	];
	const otherSkills = [
		{ title: 'Drupal', svgMarkup: SVGIcons.drupal, color: '#0678be', percentage: 86 },
		{ title: 'Docker', svgMarkup: SVGIcons.docker, color: '#1d63ed', percentage: 62 },
		{ title: 'Moqups / Figma', svgMarkup: SVGIcons.figma, color: '#0acf83', percentage: 65 },
		{
			title: 'Git / Github / Version Control',
			svgMarkup: SVGIcons.git,
			color: '#fff',
			percentage: 80
		},
		{
			title: 'UnRaid Server Management',
			svgMarkup: SVGIcons.unraid,
			color: '#F05A2E',
			percentage: 80
		},
		{ title: 'Jira', svgMarkup: SVGIcons.jira, color: '#3491F6', percentage: 85 },
		{
			title: 'Slack / MS Teams / Zoom',
			svgMarkup: SVGIcons.slack,
			color: '#5E1E66',
			percentage: 100
		},
		{
			title: 'Agile + Scrum Workflow',
			svgMarkup: SVGIcons.scrum,
			color: '#5A72E9',
			percentage: 100
		}
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fade-in-section-visible');
					}
				});
			},
			{
				threshold: 0.1
			}
		);

		const elements = document.querySelectorAll('.fade-in-section');
		elements.forEach((el) => {
			observer.observe(el);
		});
	});
	let showModal = false;

	// Array of image URLs for the slideshow
	let images = [
		'/path/to/image1.jpg',
		'/path/to/image2.jpg'
		// more images...
	];

	// Function to open the modal
	function openModal() {
		showModal = true;
	}

	// Function to handle modal close event
	function handleModalClose() {
		showModal = false;
	}
</script>

<div id="about">
	<div class="about-section fade-in-section" id="about-me">
		<div class="about-section-header overlap-content">
			<h4><span>Vak</span>htang Kobiashvili</h4>
		</div>
		<div class="about-section-content about-me-container outlined">
			<p>I build creative stuff that looks pretty good.</p>
			<p>
				For <strong>9 years</strong>, I've been working with
				<strong
					>508-compliant
					<a href="#clients">government contracts</a></strong
				>
				—proving that accessible design <em>doesn't have to be dull</em>.
			</p>
			<p>
				I built this portfolio from scratch using Svelte, packed it into an Nginx Docker container,
				and host it directly on my 38TB unRaid server right in my living room.
			</p>
			<p>
				While I think that's pretty cool, I'm also fairly confident making things with my hands too.
			</p>
		</div>
	</div>

	<div class="about-section fade-in-section" id="whatido">
		<div class="about-section-header overlap-content">
			<h4>What I <span>do</span></h4>
		</div>
		<div class="about-section-content what-i-do">
			<div class="cards-container">
				<Card
					title="Responsive Web Design"
					description="9 years of crafting websites that look great and work seamlessly on any device."
					svgMarkup={SVGIcons.responsive}
				/>
				<Card
					title="508 Compliance & Accessibility"
					description="9 years of turning “must-have” compliance into user-friendly, engaging experiences."
					svgMarkup={SVGIcons.accessibility}
				/>
				<Card
					title="DIY Infrastructure & Automation"
					description="Years of building and fine-tuning custom systems—from Dockerized apps to a home server setup—so everything runs just right."
					svgMarkup={SVGIcons.diy}
				/>
			</div>
			<div class="skills">
				<div class="column">
					{#each frontEndSkills as skill (skill.title)}
						<ProgressBar
							skill={skill.title}
							percentage={skill.percentage}
							svgMarkup={skill.svgMarkup}
							color={skill.color}
						/>
					{/each}
				</div>
				<div class="column">
					{#each otherSkills as skill}
						<ProgressBar
							skill={skill.title}
							percentage={skill.percentage}
							svgMarkup={skill.svgMarkup}
							color={skill.color}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="about-section fade-in-section" id="clients">
		<div class="about-section-header overlap-content">
			<h4>Clients</h4>
		</div>
		<div class="about-section-content clients-container">
			<Clients />
			<!-- <Timeline /> -->
		</div>
	</div>
	<div class="about-section fade-in-section" id="timeline">
		<!-- <div class="about-section-header overlap-content">
			<h4>Clients</h4>
		</div> -->
		<div class="about-section-content timeline-container">
			<Timeline />
		</div>
	</div>

	<div class="about-section fade-in-section" id="whatilike">
		<div class="about-section-header">
			<h4>What I <span>like</span></h4>
		</div>
		<div class="about-section-content cards-container">
			<div class="cards-container">
				<Card
					title="Woodworking"
					description=""
					svgMarkup={SVGIcons.woodworking}
				/>

				<!-- <Card
					title="Photography"
					description=""
					svgMarkup={SVGIcons.photo}
				/> -->
			</div>
		</div>
	</div>
	<div class="about-section fade-in-section">
		<div class="about-section-header">
			<h4>Art</h4>
		</div>
		<div class="about-section-content cards-container">test</div>
	</div>
</div>

<style lang="scss">
	#about {
		position: relative;
		width: 100%;
		top: -100px;
		.about-section {
			margin-bottom: 2rem;
			&#clients {
				margin-bottom: 0;
			}
			&:first-of-type {
				margin: 0;
			}
			.about-section-header {
				padding: 0.2rem;
				background: $primary-red;
				color: $white;
				width: 60%;
				margin: 0 auto;
				position: relative;
				box-shadow: $box-shadow;
				border-radius: $curve-border;
				text-align: center;
				font-size: 2.5rem;
				font-family: 'Quicksand-med';
				text-transform: uppercase;

				h4 {
					margin: 1rem;
					letter-spacing: 0.1rem;
				}
				span {
					color: $primary-yellow;
				}
			}
			.about-section-content {
				padding-top: 3rem;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;

				.cards-container {
					display: flex;
					justify-content: space-evenly;
				}
				&.outlined {
					@include container-outline($denim-black);
				}
				&.timeline-container {
					padding-top: 0;
				}
			}
		}
		.about-me-container {
			color: $white;
			padding: $pad-1 * 3;
			font-size: 1.3rem;
			a {
				@include anchor-underline;
			}
		}
		.what-i-do {
			p {
				text-align: center;
				font-size: 1.2rem;
				font-style: italic;
			}
			.skills {
				display: flex;
				div {
					flex: 1;
				}
			}

			/* flex-wrap: wrap; */
			/* flex-direction: row !important; */
		}
		.clients-container {
			background: $white;
			border-radius: $radius-left;
			padding: $pad-1 2rem;
			font-size: 1.1rem;
			margin-bottom: 0;
			ul {
				padding-left: 3rem;
			}
		}
	}

	.overlap-content {
		position: relative;
		bottom: -40px;
	}

</style>
