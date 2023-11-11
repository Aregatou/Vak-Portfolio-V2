<script>
	import Leftside from '$components/leftside.svelte';
</script>

<nav>
	<Leftside />
</nav>

<main>
	<slot />
</main>

<footer />

<style lang="scss">
	@import '$styles/global.css';

	nav {
		width: 300px;
		background-image: url('/images/denim.png');
		background-repeat: repeat;
		padding: 10px;
		flex-shrink: 0;
		color: $primary-red;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		z-index: 10;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}

	main {
		flex-grow: 1;
	}
</style>
