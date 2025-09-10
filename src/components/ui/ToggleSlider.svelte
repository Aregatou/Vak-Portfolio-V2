<script lang="ts">
	export let checked = false;
	export let onChange = () => {};
	export let label = 'Toggle';

	const toggle = () => {
		onChange(!checked);
	};
</script>

<label class="toggle">
	<input type="checkbox" bind:checked on:change={toggle} aria-label={label} />
	<span class="slider" />
	<span class="sr-only">{label}</span>
</label>

<style lang="scss">
	.toggle {
		position: relative;
		display: inline-block;
		width: 44px;
		height: 22px;
		vertical-align: bottom;

		input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: $white-transparent;
			transition: background-color 0.4s;
			border-radius: 25px;
			&:before {
				content: '';
				position: absolute;
				height: 16px;
				width: 16px;
				left: 3px;
				bottom: 3px;
				background-color: rgba($amethyst, 0.9);
				transition: transform 0.4s;
				border-radius: 50%;
			}
		}
		input:checked + .slider {
			background-color: $amethyst;
		}
		input:checked + .slider:before {
			transform: translateX(22px);
			background-color: $cosmic-purple;
		}
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
