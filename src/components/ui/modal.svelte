<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let showModal = false;
	export let title = '';
	export let width = '500px';
	export let showCloseButton = true;

	function close() {
		dispatch('close');
	}
</script>

{#if showModal}
	<div class="modal-overlay" on:click={close}>
		<div class="modal-body" style="max-width: {width}" on:click|stopPropagation>
			{#if showCloseButton}
				<button class="modal-close" on:click={close}>×</button>
			{/if}

			{#if title}
				<h2 class="modal-title">{title}</h2>
			{/if}

			<slot />
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-body {
		position: relative;
		background-color: white;
		padding: 20px;
		border-radius: 8px;
		max-height: 90%;
		overflow: auto;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
	}

	.modal-title {
		margin-bottom: 15px;
		font-size: 1.5rem;
		text-align: center;
	}

	.modal-close {
		position: absolute;
		top: 10px;
		right: 10px;
		border: none;
		background: none;
		font-size: 24px;
		cursor: pointer;
	}
</style>
