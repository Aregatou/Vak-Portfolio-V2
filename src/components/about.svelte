<script>
	import { onMount } from 'svelte';
	import Card from '$components/display-card.svelte';
	import TechCard from '$components/tech-card.svelte';
	import Clients from '$components/clients.svelte';
	import { SVGIcons } from '$lib/svgList.js';

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
			<h4>Tech I like</h4>
		</div>
		<div class="about-section-content tech-container">
			<TechCard title="Svelte" svgMarkup={SVGIcons.react} color="#ff794c" content="" />
			<TechCard title="Angular" svgMarkup={SVGIcons.angular} color="#dd1b16" content="" />
			<TechCard title="React" svgMarkup={SVGIcons.react} color="#149eca" content="" />
			<TechCard title="Drupal" svgMarkup={SVGIcons.drupal} color="#0678be" content="" />
			<TechCard title="TypeScript" svgMarkup={SVGIcons.typescript} color="#7fa2c9" content="" />
			<TechCard title="jQuery" svgMarkup={SVGIcons.jquery} color="#0769ad" content="" />
			<TechCard title="SASS/SCSS" svgMarkup={SVGIcons.sass} color="#CF649A" content="" />
			<TechCard title="Docker" svgMarkup={SVGIcons.docker} color="#1d63ed" content="" />
			<TechCard title="Moqups / Figma" svgMarkup={SVGIcons.figma} color="#0acf83" content="" />
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

<style lang="scss">
	#about {
		position: relative;
		padding: 2rem;
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
				box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
				border-radius: 15px;
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
			}
		}
		.tech-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			border: 6px solid $space-purple;
			border-radius: 15px;
			margin-left: 16px;
		}
		.clients-container {
			background: white;
			border-radius: 0 20px 20px 0;
			padding: $pad-1;
			padding: 1rem 2rem;
			font-size: 1.1rem;
			ul {
				padding-left: 2rem;
			}
		}
	}
	.cards-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 16px;
		padding: 16px;
	}

	.overlap-content {
		position: relative;
		bottom: -40px;
	}
</style>
