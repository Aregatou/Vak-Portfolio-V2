<script lang="ts">
	import Card from '$components/ui/Card.svelte';
	import { fadeIn, SVGIcons } from '$lib';
	import artProjects from '$data/artProjects.json';
	import Modal from '$components/ui/Modal.svelte';
	import ProjectGallery from '$components/ui/ProjectGallery.svelte';
	import { projects } from '$data/projects';

	let showModal = false;
	let activeProject = null;

	const galleryColors = [
		`var(--gallery-color-1)`,
		`var(--gallery-color-2)`,
		`var(--gallery-color-3)`,
		`var(--gallery-color-4)`
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

<section id="WhatICraft" class="fade-in-section" use:fadeIn>
	<div class="section-header">
		<h4>What I <span>craft</span></h4>
	</div>
	<div class="section-content cards-container">
		<div class="cards-container">
			{#each projects as project, index}
				<Card
					title={project.title}
					description={project.description}
					mode="gallery"
					image={project.heroImage}
					svgMarkup={SVGIcons.woodworking}
					color={galleryColors[index % galleryColors.length]}
					on:cardclick={() => openProject(project)}
				/>
			{/each}
		</div>
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
			.cards-container {
				display: flex;
				flex-wrap: wrap;
				justify-content: center; // or space-evenly, if that works better with wrapping
				gap: 1rem;
				background: none;
			}
		}
	}
</style>
