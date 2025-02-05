<script>
	import Card from '$components/ui/Card.svelte';
	import ProgressBar from '$components/ui/ProgressBar.svelte';
	import { fadeIn, SVGIcons, frontEndSkills, otherSkills } from '$lib';

	const cards = [
		{
			title: 'Responsive Web Design',
			description:
				'9 years of crafting websites that look great and work seamlessly on any device.',
			icon: SVGIcons.responsive
		},
		{
			title: '508 Compliance & Accessibility',
			description:
				'9 years of turning must-have compliance into user-friendly, engaging experiences.',
			icon: SVGIcons.accessibility
		},
		{
			title: 'DIY Infrastructure & Automation',
			description:
				'Years of building and fine-tuning custom systems—from Dockerized apps to a home server setup.',
			icon: SVGIcons.diy
		}
	];
</script>

<section id="WhatIDo" class="fade-in-section" use:fadeIn>
	<div class="section-header overlap-content">
		<h4>What I <span>do</span></h4>
	</div>
	<div class="section-content">
		<div class="cards-container outlined">
			{#each cards as card}
				<Card title={card.title} description={card.description} svgMarkup={card.icon} mode="icon" />
			{/each}
		</div>
		<div class="skills">
			{#each [frontEndSkills, otherSkills] as skillsList}
				<div class="column">
					{#each skillsList as skill}
						<ProgressBar
							skill={skill.title}
							percentage={skill.percentage}
							svgMarkup={SVGIcons[skill.svgMarkup]}
							color={skill.color}
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		.section-header {
			@include section-header-styles();
		}
		.section-content {
			@include section-content-styles();

			.cards-container {
				position: relative;
				bottom: 40px;
				display: flex;
				justify-content: space-evenly;
				flex-direction: column;
				align-items: flex-start;
				gap: 1rem;
				margin: 0 auto;
				padding: 3rem 1rem 1rem;
				border-radius: $radius-left;
				@include container-outline();

				@include respond-to(desktop) {
					flex-direction: row;
					align-items: flex-start;
				}
			}
			.skills {
				display: flex;
				.column {
					flex: 1;
				}
			}
		}
	}
</style>
