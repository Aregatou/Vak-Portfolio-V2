<script>
	import LeftNav from '$components/left-nav.svelte';
</script>

<nav>
	<LeftNav />
</nav>
<main />

<footer />

<slot />

<style lang="scss">
	@import '/styles/global.css';
	nav {
		float: left;
		width: 300px;
		background: #f2f3f7;
		padding: 10px;
		box-sizing: border-box;
	}
	main {
		float: right;
	}
</style>
