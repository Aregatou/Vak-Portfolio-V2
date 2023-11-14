<script>
	export let svgMarkup;
	export let title;
	export let description;
	export let color = '#e04343';
	export let hoverColor = 'white';
</script>

<div class="card" style={`--svg-color: ${color}; --hover-svg-color: ${hoverColor};`}>
	<div class="card-image">
		<div class="card-image-circle">
			{@html svgMarkup}
		</div>
	</div>
	<div class="card-content">
		<h2 class="card-title">{title}</h2>
		<p class="card-description">{description}</p>
	</div>
</div>

<style lang="scss">
	.card {
		text-decoration: none;
		color: inherit;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		flex: 1;
		--card-svg-color: var(--svg-color);
		&:hover {
			--card-svg-color: var(--hover-svg-color);
			.card-image-circle {
				background: $primary-red;
				color: $white;
				:global(svg) {
					transform: scale(1.15);
				}
			}
		}
		.card-image {
			display: flex;
			justify-content: center;
			padding: $pad-1;
			padding-bottom: 0;
			.card-image-circle {
				border: 2px solid $primary-red;
				border-radius: 50%;
				padding: $pad-1 * 2;
				width: 70px;
				height: 70px;
				color: var(--card-svg-color);
				transition: $ease-transform, background-color 0.3s ease, color 0.3s ease;
				:global(svg) {
					fill: currentColor;
					width: 100%;
					height: 100%;
					transition: transform 0.3s ease, fill 0.3s ease;
					transform-origin: center;
				}
			}
		}
		.card-content {
			padding: $pad-1;
			.card-title {
				margin-top: 0;
				margin-bottom: 1em;
				min-height: 2em;
				height: 2.5em;
				text-align: center;
				font-size: 1.4rem;
			}
			.card-description {
				text-align: center;
			}
		}
	}
</style>
