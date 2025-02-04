<script>
	import Card from '$components/ui/Card.svelte';
	import { fadeIn, SVGIcons } from '$lib';
</script>

<section id="whatilike" class="fade-in-section" use:fadeIn>
	<div class="section-header">
		<h4>What I <span>like</span></h4>
	</div>
	<div class="section-content cards-container">
		<div class="cards-container">
			<Card title="Woodworking" description="" svgMarkup={SVGIcons.woodworking} />
			<!-- Uncomment below if you decide to include Photography:
			<Card title="Photography" description="" svgMarkup={SVGIcons.photo} />
			-->
		</div>
	</div>
</section>

<style lang="scss">
	section {
		.section-header {
			@include section-header-styles();

			span {
				color: $primary-yellow;
			}
		}
		.section-content {
			@include section-content-styles();

			.cards-container {
				display: flex;
				justify-content: space-evenly;
			}
		}
	}
</style>
