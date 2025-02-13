<script>
	export let checked = false;

	export let onChange = () => {};

	function toggle() {
		onChange(!checked);
	}
</script>

<label class="toggle">
	<input type="checkbox" bind:checked on:change={toggle} />
	<span class="slider" />
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
</style>
