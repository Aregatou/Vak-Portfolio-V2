<script>
	import { fadeIn } from '$lib';
</script>

<section class="fade-in-section" use:fadeIn>
	<div class="section-header">
		<h4>Art</h4>
	</div>
</section>

<style lang="scss">
	section {
		.section-header {
			@include section-header-styles();
		}
		.section-content {
			@include section-content-styles();
		}
	}
</style>
