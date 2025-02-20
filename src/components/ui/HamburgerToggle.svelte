<script lang="ts">
	export let navOpen = false;
	export let toggleNav = () => {};
</script>

<button
	aria-label="mobile menu toggle"
	class="cs-toggle"
	aria-expanded={navOpen}
	on:click={toggleNav}
>
	<div class="cs-square">
		<div class="cs-box">
			<span class="cs-line cs-line1" />
			<span class="cs-line cs-line2" />
			<span class="cs-line cs-line3" />
		</div>
	</div>
</button>

<style lang="scss">
	.cs-toggle {
		position: fixed;
		top: 15px;
		left: 10px;
		width: 40px;
		height: 40px;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 105;


		.cs-square {
			position: relative;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: transform 0.3s ease;
			background: $primary-orange;
			border-radius: 8px;
			padding: 0.5rem;
			box-shadow: 0 0 12px rgba(0, 0, 0, 0.55);

		}

		.cs-box {
			position: relative;
			width: 30px;
			height: 24px;
			margin: auto;

			.cs-line {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				height: 4px;
				width: 100%;
				background-color: $off-white;
				transition: transform 0.5s ease, top 0.3s ease, opacity 0.3s ease;
				transform-origin: center;
			}

			.cs-line1 {
				top: 0;
			}
			.cs-line2 {
				top: 50%;
				transform: translate(-50%, -50%);
			}
			.cs-line3 {
				bottom: 0;
			}
		}

		&[aria-expanded='true'] {
			.cs-square {
				transform: rotate(180deg);
			}
			.cs-box {
				.cs-line1 {
					top: 50%;
					transform: translate(-50%, -50%) rotate(135deg);
				}
				.cs-line2 {
					opacity: 0;
				}
				.cs-line3 {
					top: 50%;
					transform: translate(-50%, -50%) rotate(45deg);
				}
			}
		}
	}
	@include respond-to(desktop) {
		.cs-toggle {
			display: none;
		}
	}
</style>
