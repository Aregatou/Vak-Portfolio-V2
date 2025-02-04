<script>
	export let svgMarkup;
	export let title;
	export let description;
	export let color = '#e04343';
	export let hoverColor = 'white';

	let svgContent = '';

	async function loadSVG() {
		try {
			const response = await fetch(svgMarkup);
			if (!response.ok) throw new Error(`Failed to load SVG: ${svgMarkup}`);
			let rawSVG = await response.text();

			svgContent = rawSVG.replace(/fill="currentColor"/g, '');
		} catch (error) {
			console.error(error);
		}
	}

	loadSVG();
</script>

<div class="card" style={`--svg-color: ${color}; --hover-svg-color: ${hoverColor};`}>
	<div class="card-image">
		<div class="card-image-circle">
			<div class="card-icon-container">
				{@html svgContent}
			</div>
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
		flex: 1;
		--card-svg-color: var(--svg-color);
		flex-direction: row;
		align-items: flex-start;

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
				width: 40px;
				height: 40px;
				color: var(--card-svg-color);
				transition: $ease-transform, background-color 0.3s ease, color 0.3s ease;
				:global(svg) {
					fill: currentColor;
					width: 100%;
					height: 100%;
					transition: transform 0.3s ease, fill 0.3s ease;
					transform-origin: center;
				}
				@include respond-to(desktop) {
					width: 70px;
					height: 70px;
				}
			}
		}

		.card-content {
			padding: $pad-1;
			margin: auto;
			.card-title {
				margin-top: 0;
				text-align: left;
				font-size: 1.2rem;
			}
			.card-description {
				text-align: left;
			}
			@include respond-to(desktop) {
				.card-title {
					text-align: center;
					margin-bottom: 1em;
					min-height: 2em;
					height: 2.5em;
					font-size: 1.4rem;
				}
				.card-description {
					text-align: center;
				}
			}
		}

		@include respond-to(desktop) {
			flex-direction: column;
			align-items: center;
			.card-image {
				margin-right: $pad-1;
				padding: $pad-1 0 $pad-1 0;
				justify-content: flex-start;
			}
			.card-content {
				flex: 1;
				text-align: left;
				padding: $pad-1;
			}
		}
	}
</style>
