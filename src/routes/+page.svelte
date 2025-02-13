<script>
	import Carousel from '$components/sections/Carousel.svelte';
	import { onMount } from 'svelte';
	import { loadingMessages } from '$lib';

	let sections = {};
	let randomLoadingMessage = '';
	let loading = true;

	function pickRandomMessage() {
		let lastIndex = parseInt(localStorage.getItem('lastLoadingMessageIndex'), 10);
		if (isNaN(lastIndex)) lastIndex = -1;
		let newIndex;

		if (loadingMessages.length > 1) {
			do {
				newIndex = Math.floor(Math.random() * loadingMessages.length);
			} while (newIndex === lastIndex);
		} else {
			newIndex = 0;
		}

		localStorage.setItem('lastLoadingMessageIndex', newIndex);
		return loadingMessages[newIndex];
	}
	async function loadSections() {
		const modules = await Promise.all([
			import('$components/sections/AboutMe.svelte'),
			import('$components/sections/WhatIDo.svelte'),
			import('$components/sections/ClientsSection.svelte'),
			import('$components/sections/TimelineSection.svelte'),
			import('$components/sections/WhatICraft.svelte'),
			import('$components/sections/ArtSection.svelte')
		]);

		sections = {
			AboutMe: modules[0].default,
			WhatIDo: modules[1].default,
			ClientsSection: modules[2].default,
			TimelineSection: modules[3].default,
			WhatICraft: modules[4].default
			// ArtSection: modules[5].default
		};

		setTimeout(() => {
			loading = false;
		}, 1200);
	}

	onMount(() => {
		randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
		loadSections();
	});
</script>

<Carousel loadingMessage={randomLoadingMessage} {loading} />

{#if Object.keys(sections).length > 0}
	<div id="sections">
		{#each Object.entries(sections) as [name, SectionComponent]}
			<svelte:component this={SectionComponent} />
		{/each}
	</div>
{/if}

<style lang="scss">
	#sections {
		position: relative;
		width: 100%;
		top: -100px;
		z-index: 2;
		:global(section) {
			margin-bottom: 2rem;
			padding: 0 1rem;
		}
	}
</style>
