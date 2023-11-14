<script>
	import { onMount } from 'svelte';
	import { observeVisibility } from '$lib/observeVisibility.js';
	export let skill = '';
	export let percentage = 0;
	export let svgMarkup;
	export let color = '#333';

	let visible = false;

	function setVisible() {
		visible = true;
	}
</script>

<div class="skill" use:observeVisibility={setVisible}>
	<div class="icon-container" style="--color: {color};">
		<div class="icon">
			{@html svgMarkup}
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
				{visible ? `${percentage}%` : ''}
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
		clip-path: polygon(
			50% 0%,
			/* top middle */ 100% 25%,
			/* right top */ 100% 75%,
			/* right bottom */ 50% 100%,
			/* bottom middle */ 0% 75%,
			/* left bottom */ 0% 25% /* left top */
		);
	}
	.skill {
		margin-bottom: 10px;
		padding: $pad-sides-2;
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
				font-weight: bold;
				margin-bottom: 5px;
				padding: 0.5rem 0;
			}
			.progress-bar-container {
				background-color: $white-transparent;
				box-shadow: $double-box-shadow;
				border-radius: $curve-border;
				height: 20px;
				width: 100%;
				overflow: hidden;
				flex-grow: 1;
				.progress-bar {
					background-color: $primary-orange;
					line-height: 20px;
					color: $white;
					text-align: center;
					border-radius: $curve-border;
					transition: width 1s ease-in-out;
				}
			}
		}
	}
</style>
