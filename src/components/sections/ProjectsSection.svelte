<script lang="ts">
	import Card from '$components/ui/Card.svelte';
	import { fadeIn } from '$lib';
	import Modal from '$components/ui/Modal.svelte';
	import ProjectGallery from '$components/ui/ProjectGallery.svelte';
	import { projects } from '$data/projects';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	let activeProjectIndex = -1;

	const galleryColors = [
		'var(--gallery-color-1)',
		'var(--gallery-color-2)',
		'var(--gallery-color-3)',
		'var(--gallery-color-4)'
	];

	const preloadFirstPhoto = (src = '') => {
		if (!src) return;

		const image = new Image();
		image.fetchPriority = 'low';
		image.src = src;
	};
</script>

<section id="WhatICraft">
	<div class="section-header overlap-content fade-in-section" use:fadeIn>
		<h4>What I <span>craft</span></h4>
	</div>
	<div class="section-content carousel-container outlined">
		<Splide
			class="gallery"
			options={{
				type: 'loop',
				perPage: 3,
				arrows: true,
				padding: 65,
				gap: '1rem',
				pagination: false,
				interval: 4000,
				pauseOnHover: false,
				trimSpace: true,
				centerSlides: true,
				autoplay: true,
				breakpoints: {
					480: {
						perPage: 1,
						padding: { left: '0.75rem', right: '2.5rem' },
						autoplay: false
					}
				}
			}}
		>
			{#each projects as project, index}
				{@const firstPhoto = project.images[0]?.src}
				<SplideSlide>
					<Card
						title={project.title}
						description={project.description}
						mode="gallery"
						image={project.heroImage}
						color={galleryColors[index % galleryColors.length]}
						on:pointerenter={() => preloadFirstPhoto(firstPhoto)}
						on:focus={() => preloadFirstPhoto(firstPhoto)}
						on:click={() => (activeProjectIndex = index)}
					/>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</section>

{#if activeProjectIndex >= 0}
	{@const activeProject = projects[activeProjectIndex]}
	<Modal on:close={() => (activeProjectIndex = -1)} title={activeProject.title}>
		<ProjectGallery images={activeProject.images} />
	</Modal>
{/if}

<style lang="scss">
	#WhatICraft {
		.section-content {
			overflow: hidden;
			&.carousel-container {
				background: url('/images/selfie-1.jpg') center center / cover no-repeat fixed;
				position: relative;
				z-index: 0;

				width: 100%;
				margin: 0 auto;
				padding: 50px 0;
				&:before {
					content: '';
					position: absolute;
					inset: 0;
					background-color: rgba(0, 0, 0, 0.5);
					z-index: -1;
				}
				@include respond-to(desktop) {
					flex-direction: row;
					align-items: stretch;
					background-position: center center;
					background-size: cover;
				}
			}
		}
	}
</style>
