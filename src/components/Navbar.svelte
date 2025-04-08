<script>
	import { onMount } from 'svelte';
	import ToggleSlider from '$components/ui/ToggleSlider.svelte';
	export let synthMode;

	// onMount(() => {
	// 	const storedSynth = localStorage.getItem('synthMode') === 'enabled';
	// 	synthMode.set(storedSynth);
	// 	updateDocumentClass(storedSynth);
	// 	console.log($synthMode);
	// });

	function updateDocumentClass(enabled) {
		if (enabled) {
			document.documentElement.classList.add('synth-mode');
			// localStorage.setItem('synthMode', 'enabled');
		} else {
			document.documentElement.classList.remove('synth-mode');
			// localStorage.setItem('synthMode', 'disabled');
		}
	}

	function toggleSynthMode(newOption) {
		synthMode.update((value) => {
			const newValue = !value;
			updateDocumentClass(newValue);
			return newValue;
		});
	}
</script>

<div id="nav-container">
	<div class="pic-container">
		<img src="/images/vak-photo.png" alt="Vak Kobiashvili" />
	</div>

	<h2>Vak Kobiashvili</h2>
	<h4>Developer</h4>

	<ul>
		<li><a href="#home">Home</a></li>
		<li><a href="#about-me">About Me</a></li>
		<li><a href="#WhatIDo">What I Do</a></li>
		<li><a href="#clients">Clients</a></li>
		<li><a href="#WhatICraft">What I Craft</a></li>
	</ul>
	<ul>
		<li><a href="https://www.linkedin.com/in/vak-k/" target="_blank">LinkedIn</a></li>
		<li>
			<!-- <a href="https://github.com/Aregatou/Vak-Portfolio-V2" target="_blank">This site's code</a> -->
		</li>
	</ul>
	<div class="mode-container">
		<p>synth-mode</p>
		<ToggleSlider checked={!synthMode} onChange={toggleSynthMode} />
	</div>
</div>

<style lang="scss">
	#nav-container {
		position: fixed;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		padding: 10px;
		height: 100vh;

		.mode-container {
			color: $white;
			font-style: italic;
			margin: 0 auto;
			p {
				text-shadow: var(--synth-text);
				margin-right: 5px;
				font-size: 0.9rem;
				display: inline;
			}
		}
		.pic-container {
			position: relative;
			margin: 0 auto 30px;
			transition: $ease-transform;

			img {
				width: 101%;
				max-width: 205px;
				border-radius: 50%;
				border: 5px solid $primary-orange;
			}
			&:hover {
				transform: scale(1.1);
			}
		}

		h2,
		h4 {
			margin: 0;
			text-align: center;
			color: $white;
			text-shadow: var(--nav-text-shadow);
		}
		h4 {
			font-style: italic;
		}
		ul {
			padding: 0;
			text-align: center;
			list-style-type: none;

			a {
				color: $white;
				text-shadow: var(--nav-text-shadow);
				display: inline-block;
				vertical-align: middle;
				font-size: 1.4rem;
			}
			@include respond-to(desktop) {
				a {
					font-size: 1.1rem;
				}
			}
		}
	}
</style>
