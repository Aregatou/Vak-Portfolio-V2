<script lang="ts">
	import Carousel from '$components/sections/carousel.svelte';
	import { onMount, type ComponentType } from 'svelte';
	import { loadingMessages } from '$lib';

	let sections: ComponentType[] = [];
	let randomLoadingMessage = '';
	let loading = true;

	const loadSections = async () => {
		const modules = await Promise.all([
			import('$components/sections/AboutMe.svelte'),
			import('$components/sections/WhatIDo.svelte'),
			import('$components/sections/ClientsSection.svelte'),
			import('$components/sections/TimelineSection.svelte'),
			import('$components/sections/ProjectsSection.svelte'),
			import('$components/sections/ContactSection.svelte')
		]);

		sections = modules.map((module) => module.default);

		setTimeout(() => {
			loading = false;
		}, 1500);
	};

	onMount(() => {
		randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
		loadSections();
	});
</script>

<Carousel loadingMessage={randomLoadingMessage} {loading} />

{#if sections.length > 0}
	<div id="sections">
		{#each sections as SectionComponent}
			<svelte:component this={SectionComponent} />
		{/each}
	</div>
{/if}

<style lang="scss">
	#sections {
		position: relative;
		width: 100%;
		top: -100px;
		:global(section) {
			margin-bottom: 2rem;
			padding: 0 1rem;
		}
	}
</style>
