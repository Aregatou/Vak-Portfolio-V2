<script>
	import { fadeIn } from '$lib';
</script>

<section class="about-section fade-in-section" use:fadeIn>
	<div class="about-section-header">
		<h4>Art</h4>
	</div>
	<div class="about-section-content cards-container">test</div>
</section>

<style lang="scss">
	.about-section {
		@include about-section-styles();
	}
</style>
