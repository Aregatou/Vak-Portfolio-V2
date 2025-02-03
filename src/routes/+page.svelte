<script>
	import Carousel from '$components/sections/Carousel.svelte';
	import { onMount } from 'svelte';

	let sections = {};

	async function loadSections() {
		const modules = await Promise.all([
			import('$components/sections/AboutMe.svelte'),
			import('$components/sections/WhatIDo.svelte'),
			import('$components/sections/ClientsSection.svelte'),
			import('$components/sections/TimelineSection.svelte'),
			import('$components/sections/WhatILike.svelte'),
			import('$components/sections/ArtSection.svelte')
		]);

		sections = {
			AboutMe: modules[0].default,
			WhatIDo: modules[1].default,
			ClientsSection: modules[2].default,
			TimelineSection: modules[3].default,
			WhatILike: modules[4].default,
			ArtSection: modules[5].default
		};
	}

	onMount(loadSections);
</script>

<Carousel />

{#if Object.keys(sections).length > 0}
	<div id="sections">
		{#each Object.entries(sections) as [name, SectionComponent]}
			<svelte:component this={SectionComponent} />
		{/each}
	</div>
{:else}
	<p>Loading content...</p>
{/if}

<style lang="scss">
	@import '$styles/global.css';

	#sections {
		position: relative;
		width: 100%;
		top: -100px;
		z-index: 2;
	}
</style>
