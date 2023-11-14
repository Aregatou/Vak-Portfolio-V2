<script>
	// You can pass properties such as title, content, icon, and color to the card
	export let title = 'Card Title';
	export let content = 'Card content goes here...';
	export let icon = ''; // URL to the icon image
	export let color = '#333'; // Background color for the icon
	export let svgMarkup;
</script>

<div class="card">
	<div class="icon-container" style="--color: {color};">
		<div class="icon">
			{@html svgMarkup}
		</div>
	</div>
	<div class="card-content">
		<h2 class="card-title">{title}</h2>
		<p class="card-dcontent">{content}</p>
	</div>
</div>

<style lang="scss">
	.card {
		position: relative;
		padding: 1rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		background: white;
		margin: 1.5rem 1rem;
		overflow: visible;
	}
	.icon-container {
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 60px;
		background: var(--color);
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

		clip-path: polygon(
			50% 0%,
			/* top middle */ 100% 25%,
			/* right top */ 100% 75%,
			/* right bottom */ 50% 100%,
			/* bottom middle */ 0% 75%,
			/* left bottom */ 0% 25% /* left top */
		);
	}
	.card-content {
		.card-title,
		.card-content {
			text-align: center;
		}
	}
	.icon {
		width: 50%;
		height: 100%;
		align-items: center;
		display: flex;
		color: white;
		background-size: cover;
		background-position: center;
	}
</style>
