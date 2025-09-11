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
			<strong>508-compliant <a href="#clients">government development</a></strong>, proving that
			accessibility and great design can absolutely go hand in hand.
		</p>
		<p>
			I built this portfolio from scratch with SvelteKit, containerized it with Docker, and deployed
			it on my own 38TB unRaid server running from my home lab—complete with Nginx reverse proxy,
			SSL termination via Cloudflare, and automated DNS management.
		</p>
		<p>
			When I'm not coding, I bring the same problem-solving approach to woodworking and creative
			projects.
		</p>

		<details class="architecture-details">
			<summary>Technical Architecture for My Website</summary>
			<div class="architecture-diagram">
				<code>
					Internet → Cloudflare → Home Router → Unraid Server → Docker Container<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[SSL/DNS]&nbsp;&nbsp;[Port
					Forward]&nbsp;&nbsp;[Nginx Proxy]&nbsp;&nbsp;[SvelteKit App]
				</code>
				<ul class="tech-stack">
					<li><strong>Frontend:</strong> SvelteKit + TypeScript + SASS</li>
					<li><strong>Infrastructure:</strong> Docker + Nginx + Cloudflare</li>
					<li><strong>Hosting:</strong> Self-managed Unraid server (38TB)</li>
					<li><strong>Security:</strong> SSL/TLS + Automated DNS + Firewall</li>
				</ul>
			</div>
		</details>
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

			.architecture-details {
				margin-top: 2rem;
				border: 1px solid rgba($white, 0.2);
				border-radius: 8px;
				overflow: hidden;

				summary {
					background: rgba($white, 0.1);
					padding: 1rem;
					cursor: pointer;
					font-weight: 600;
					user-select: none;
					transition: background 0.2s ease;

					&:hover {
						background: rgba($white, 0.15);
					}
				}

				.architecture-diagram {
					padding: 1.5rem;
					background: rgba($dark-grey, 0.3);

					code {
						display: block;
						background: rgba($dark-grey, 0.5);
						padding: 1rem;
						border-radius: 4px;
						font-family: 'Courier New', monospace;
						font-size: 0.9rem;
						margin-bottom: 1rem;
						overflow-x: auto;
						white-space: nowrap;
					}

					.tech-stack {
						list-style: none;
						padding: 0;
						margin: 0;

						li {
							padding: 0.5rem 0;
							font-size: 1rem;
							border-bottom: 1px solid rgba($white, 0.1);

							&:last-child {
								border-bottom: none;
							}

							strong {
								color: $primary-orange;
							}
						}
					}
				}
			}
		}
	}
</style>
