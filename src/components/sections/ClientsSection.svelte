<script lang="ts">
	import { fadeIn } from '$lib';
</script>

<section id="clients" class="fade-in-section" use:fadeIn>
	<div class="section-header overlap-content">
		<h4>Clients</h4>
	</div>
	<div class="section-content clients-container">
		<p>
			Prioritizing client needs means collaborating with team members, project managers, and
			organization staff directly.
		</p>
		<p>
			<strong>The incredible teams I've worked with span across many client organizations:</strong>
		</p>
	</div>
</section>

<style lang="scss">
	#clients {
		margin-bottom: 0;
		padding-left: 0;
		.section-content {
			background: var(--container-bg);
			border-radius: $radius-left;
			padding: 3rem 2rem $pad-1 2rem;
			font-size: 1.1rem;
			margin-bottom: 0;
		}
	}
	/* .client-list {
		list-style: none;
		padding-left: 0;
		li {
			margin-bottom: 0.5em;
			padding-left: 1.5em;
			position: relative;
			&::before {
				content: '#';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%) scale(1);
				font-size: 1.5em;
				line-height: 1;
				color: $primary-blue;
				transition: transform 0.2s ease;
			}
			a {
				text-decoration: none;
				transition: text-shadow 0.2s ease;
				position: relative;
				span {
					text-decoration: underline;
					color: $primary-blue;
					text-shadow: none;
				}
				&:hover {
					bottom: 1px;
					text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
				}
			}
			a:visited {
				span {
					color: $primary-red;
				}
			}
		}
		&:hover {
			li::before {
				transform: translateY(-50%) scale(0.9);
			}
		}
	}

	.client-list li:hover::before {
		transform: translateY(-50%) scale(0.5);
	}

	.client-list li:hover + li::before {
		transform: translateY(-50%) scale(0.75);
	} */
</style>
