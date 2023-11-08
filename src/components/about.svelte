<script>
	import { onMount } from 'svelte';
	import Card from '$components/display-card.svelte';
	const respSvg = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="currentColor"><path d="M120-120v-520h200v-200h520v720H120Zm520-80h120v-560H400v120h240v440Zm-240 0h160v-360H400v360Zm-200 0h120v-360H200v360Zm440-440v80-80Zm-320 80Zm240 0Zm80-80Z"/></svg>`;
	const woodSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>`;
	const accSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z"/></svg>`;
	const webDevSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z" /></svg>`;
	const photoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>`;
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fade-in-section-visible');
					}
				});
			},
			{
				threshold: 0.1
			}
		);

		const elements = document.querySelectorAll('.fade-in-section');
		elements.forEach((el) => {
			observer.observe(el);
		});
	});
</script>

<div id="about" class="fade-in-section">
	<div class="about-intro">
		<h4>What I Do</h4>
		<p>
			I do a <em>lot</em>.
		</p>
	</div>

	<div class="cards-container">
		<Card
			title="Web Design"
			description="8 years of experience developing web design solutions."
			svgMarkup={webDevSvg}
		/>
		<Card
			title="508 Compliance & Accessibility"
			description="6 years of experience working with government clients."
			svgMarkup={accSvg}
		/>
		<Card
			title="Responsive Design"
			description="8 years of experience implementing responsive applications"
			svgMarkup={respSvg}
		/>

		<Card title="Woodworking" description="3 years of hobbiest woodworking" svgMarkup={woodSvg} />

		<Card title="Photography" description="10 years of hobbiest photography" svgMarkup={photoSvg} />
	</div>
</div>

<style lang="scss">
	/* <!-- image="/images/display-solid.svg" --> */

	#about {
		/* margin-top: 100px; */
		padding: 2rem;
		width: 100%;
		.about-intro {
			padding: 1rem;
		}
		/* .cards-container {
			display: flex;
			justify-content: space-evenly;
		} */
	}
	.fade-in-on-scroll {
		opacity: 0;
		animation-fill-mode: forwards;
		animation-duration: 1s;
		animation-timing-function: ease-out;
	}
	.cards-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 16px;
		padding: 16px;
	}
</style>
