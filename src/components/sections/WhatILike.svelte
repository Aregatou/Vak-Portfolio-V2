<script>
	import Card from '$components/ui/Card.svelte';
	import { fadeIn, SVGIcons } from '$lib';
</script>

<section id="whatilike" class="about-section fade-in-section" use:fadeIn>
	<div class="about-section-header">
		<h4>What I <span>like</span></h4>
	</div>
	<div class="about-section-content cards-container">
		<div class="cards-container">
			<Card title="Woodworking" description="" svgMarkup={SVGIcons.woodworking} />
			<!-- Uncomment below if you decide to include Photography:
			<Card title="Photography" description="" svgMarkup={SVGIcons.photo} />
			-->
		</div>
	</div>
</section>

<style lang="scss">
	.about-section {
		@include about-section-styles();
	}
	.about-section {
		.about-section-header {
			span {
				color: $primary-yellow;
			}
		}
		.about-section-content {
			.cards-container {
				display: flex;
				justify-content: space-evenly;
			}
		}
	}
</style>
