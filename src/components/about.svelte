<script>
	import { onMount } from 'svelte';
	import Card from '$components/display-card.svelte';
	import TechCard from '$components/tech-card.svelte';
	import ProgressBar from '$components/progress-bar.svelte';
	import Clients from '$components/clients.svelte';
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
</script>

<div id="about">
	<div class="about-section fade-in-section" id="about-me">
		<div class="about-section-header overlap-content">
			<h4><span>Vak</span>htang Kobiashvili</h4>
		</div>
		<div class="about-section-content about-me-container outlined">
			<p>I do a lot of creative things and they usually end up pretty good.</p>
			<p>
				For <strong>8 years</strong>, I've been a developer on many different
				<strong
					>508-compliant
					<a href="#clients">government contracts</a></strong
				>. But federally regulated accessibility standards are often misunderstood as
				<strong><em>have to be boring-looking</em></strong>.
			</p>
			<p>
				I do what I can to convince you otherwise, like design this fully 508-compliant portfolio I
				built from scratch using Svelte, running in an ngninx docker container, on my 28TB unRaid
				server, hosted in my living room.
			</p>
			<p>
				That's pretty cool, right? It took me days to figure out my media server, cloudflare DNS,
				port-forwarding, and proxy-management configurations.<br /> <em>I</em> think that's pretty cool.
			</p>
		</div>
	</div>
	<div class="about-section fade-in-section" id="whatido">
		<div class="about-section-header overlap-content">
			<h4>What I <span>do</span></h4>
		</div>
		<div class="about-section-content">
			<div class="cards-container">
				<Card
					title="Web Development"
					description="8 years of experience developing web design solutions."
					svgMarkup={SVGIcons.webDev}
				/>
				<Card
					title="508 Compliance & Accessibility"
					description="6 years of experience working with a variety of government clients."
					svgMarkup={SVGIcons.accessibility}
				/>
				<Card
					title="Responsive Design"
					description="8 years of experience implementing responsive applications."
					svgMarkup={SVGIcons.responsive}
				/>
			</div>
		</div>
	</div>

	<div class="about-section fade-in-section" id="tech">
		<div class="about-section-header overlap-content">
			<h4><span>Tech</span> Skills</h4>
		</div>
		<div class="about-section-content tech-container">
			<p>100% signifies I can talk about this skill for hours</p>
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
					description="3 years of hobbiest woodworking"
					svgMarkup={SVGIcons.woodworking}
				/>

				<Card
					title="Photography"
					description="10 years of hobbiest photography"
					svgMarkup={SVGIcons.photo}
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#about {
		position: relative;
		width: 100%;
		top: -100px;
		.about-section {
			margin-bottom: 2rem;
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
		.tech-container {
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
