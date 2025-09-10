<script lang="ts">
	import { fadeIn } from '$lib';
</script>

<section id="about-me" class="fade-in-section" use:fadeIn>
	<div class="section-header overlap-content">
		<h4><span>Vak</span>htang Kobiashvili</h4>
	</div>
	<div class="section-content outlined">
		<p>I build web applications that solve real problems and look great doing it.</p>
		<p>
			For <strong>9 years</strong>, I've specialized in
			<strong>508-compliant <a href="#clients">government development</a></strong>,
			proving that accessibility and great design can absolutely go hand in hand.
		</p>
		<p>
			I built this portfolio from scratch with SvelteKit, containerized it with Docker,
			and deployed it on my own 38TB unRaid server running from my home lab—complete with 
			Nginx reverse proxy, SSL termination via Cloudflare, and automated DNS management.
		</p>
		<p>
			When I'm not coding, I bring the same problem-solving approach to woodworking and creative projects.
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
