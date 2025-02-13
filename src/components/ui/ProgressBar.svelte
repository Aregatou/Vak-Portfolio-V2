<script>
	import { onMount } from 'svelte';
	import { observeVisibility } from '$lib';

	export let skill = '';
	export let percentage = 0;
	export let svgMarkup;
	export let color = '#333';

	let visible = false;
	let svgContent = '';

	async function loadSVG() {
		try {
			const response = await fetch(svgMarkup);
			if (!response.ok) throw new Error(`Failed to load SVG: ${svgMarkup}`);
			svgContent = await response.text();
		} catch (error) {
			console.error(error);
		}
	}

	loadSVG();

	function setVisible() {
		visible = true;
	}
</script>

<div class="skill" use:observeVisibility={setVisible}>
	<div class="icon-container" style="--color: {color};">
		<div class="icon">
			{@html svgContent}
		</div>
	</div>
	<div class="skill-container">
		<div class="skill-label">
			<div class="label">
				{skill}
			</div>
		</div>
		<div class="progress-bar-container">
			<div class="progress-bar" style="width: {visible ? percentage : 0}%;">
				<span class="sr-only">
					{visible ? `${percentage}%` : ''}
				</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@mixin flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@mixin flex-start {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	@mixin skill-icon {
		@include flex-center;
		width: 50px;
		height: 50px;
		background: var(--color);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	}

	.skill {
		margin-bottom: 10px;
		padding: 0 24px;
		@include flex-start;
		align-items: end;

		.icon-container {
			margin: $margin-1;
			@include skill-icon;
			.icon {
				width: 50%;
				@include flex-center;
				color: $white;
				background-size: cover;
				background-position: center;
			}
		}

		.skill-container {
			@include flex-start;
			align-items: flex-start;
			flex-direction: column;
			width: 100%;

			.skill-label {
				@include flex-start;
				font-family: $font-med;
				margin-bottom: 5px;
				padding: 0.5rem 0;
			}

			.progress-bar-container {
				background-color: $white-transparent;
				box-shadow: $double-box-shadow;
				border-radius: $curve-border;
				width: 100%;
				overflow: hidden;
				flex-grow: 1;

				.progress-bar {
					background-color: $primary-orange;
					line-height: var(--progress-height, 20px);
					color: transparent;
					text-align: center;
					border-radius: $curve-border;
					transition: width 1s ease-in-out;
					.sr-only {
						overflow: hidden;
						clip: rect(0, 0, 0, 0);
						clip-path: inset(100%);
						border: 0;
						white-space: nowrap;
					}
				}
			}
		}
	}
</style>
