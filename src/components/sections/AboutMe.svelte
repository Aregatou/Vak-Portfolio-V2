<script lang="ts">
	import { fadeIn } from '$lib';
</script>

<section id="about-me" class="fade-in-section" use:fadeIn>
	<div class="section-header overlap-content">
		<h4><span>Vak</span>htang Kobiashvili</h4>
	</div>
	<div class="section-content outlined">
		<p>I build creative stuff that looks pretty good.</p>
		<p>
			For <strong>9 years</strong>, I've been working with
			<strong>508-compliant <a href="#clients">government contracts</a></strong>
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
</section>

<style lang="scss">
	#about-me {
		margin: 0;
		z-index: 2;
		position: relative;
		.section-content {
			background: var(--section-black);
			color: $white;
			padding: $pad-1 * 3;
			font-size: 1.3rem;

			a {
				white-space: nowrap;
			}
		}
	}
</style>
