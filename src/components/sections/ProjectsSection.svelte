<script lang="ts">
	import Card from '$components/ui/Card.svelte';
	import { fadeIn, SVGIcons } from '$lib';
	import Modal from '$components/ui/Modal.svelte';
	import ProjectGallery from '$components/ui/ProjectGallery.svelte';
	import { projects } from '$data/projects';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	let showModal = false;
	let activeProject = null;

	const galleryColors = [
		'var(--gallery-color-1)',
		'var(--gallery-color-2)',
		'var(--gallery-color-3)',
		'var(--gallery-color-4)'
	];

	const openProject = (project) => {
		console.log('openProject triggered:', project);
		activeProject = project;
		showModal = true;
		document.body.classList.add('no-scroll');
		document.documentElement.classList.add('no-scroll');
	};

	const closeModal = () => {
		showModal = false;
		activeProject = null;
		document.body.classList.remove('no-scroll');
		document.documentElement.classList.remove('no-scroll');
	};
</script>

<section id="WhatICraft">
	<!-- <section id="WhatICraft" class="fade-in-section" use:fadeIn> -->
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
				autoplay: true
			}}
		>
			{#each projects as project, index}
				<SplideSlide>
					<Card
						title={project.title}
						description={project.description}
						mode="gallery"
						image={project.heroImage}
						svgMarkup={SVGIcons.woodworking}
						color={galleryColors[index % galleryColors.length]}
						on:cardclick={() => openProject(project)}
					/>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</section>

{#if showModal && activeProject}
	<Modal on:close={closeModal} title={activeProject.title}>
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
