<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// Prop to control the visibility of the modal
	export let showModal = false;

	// Function to close the modal
	function close() {
		dispatch('close');
	}
</script>

{#if showModal}
	<div class="modal-overlay" on:click={close}>
		<div class="modal-body" on:click|stopPropagation>
			<button class="modal-close" on:click={close}>×</button>

			<!-- Place your Splide carousel here -->
			<slot />
		</div>
	</div>
{/if}

<style>
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
		border-radius: 4px;
		max-width: 90%;
		max-height: 90%;
		overflow: auto;
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
