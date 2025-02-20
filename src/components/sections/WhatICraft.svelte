<script lang="ts">
	import Card from '$components/ui/Card.svelte';
	import { fadeIn, SVGIcons } from '$lib';
	import artProjects from '$data/artProjects.json';
	import Modal from '$components/ui/Modal.svelte';
	import WoodworkingGallery from '$components/ui/WoodworkingGallery.svelte';

	let showModal = false;
	let activeProject = null;

	let projects = [
		{
			title: 'Goku',
			heroImage: artProjects['goku-v1'][6].src,
			images: artProjects['goku-v1']
		},
		{
			title: 'Wood Panel Art',
			heroImage: artProjects['wood-panel'][0].src,
			images: artProjects['wood-panel']
		},

		{
			title: 'Quincy',
			heroImage: artProjects['quincy'][9].src,
			images: artProjects['quincy']
		},
		{
			title: 'Paint Drip Blue Jay',
			heroImage: artProjects['blue-jay'][5].src,
			images: artProjects['blue-jay']
		},
		{
			title: 'Lumpy Space Princess',
			heroImage: artProjects['LSP'][10].src,
			images: artProjects['LSP']
		},
		{
			title: 'Woodburned Elephant',
			heroImage: artProjects['elephant'][6].src,
			images: artProjects['elephant']
		},

		{
			title: 'Mother & Son',
			heroImage: artProjects['holding-son'][6].src,
			images: artProjects['holding-son']
		},
		{
			title: 'Custom Ottoman',
			heroImage: artProjects['ottoman'][8].src,
			images: artProjects['ottoman']
		},
		{
			title: 'Sword Mount',
			heroImage: artProjects['sword-mount'][2].src,
			images: artProjects['sword-mount']
		}
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
			{#each projects as project}
				<Card
					title={project.title}
					description=""
					mode="gallery"
					image={project.heroImage}
					svgMarkup={SVGIcons.woodworking}
					on:cardclick={() => openProject(project)}
				/>
			{/each}
		</div>
	</div>
</section>
{#if showModal && activeProject}
	<Modal on:close={closeModal}>
		<h3>{activeProject.title}</h3>
		<WoodworkingGallery images={activeProject.images} />
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
