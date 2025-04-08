<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	const dispatch = createEventDispatcher();

	export let title = '';

	function close() {
		dispatch('close');
	}

	const handleKeydown = (event) => {
		if (event.key === 'Escape') {
			close();
		}
	};

	window.addEventListener('keydown', handleKeydown);
	onDestroy(() => window.removeEventListener('keydown', handleKeydown));
</script>

<div class="modal-overlay-wrapper" transition:fade>
	<button type="button" class="modal-overlay" aria-label="Close modal overlay" on:click={close}
		>&nbsp;</button
	>

	<div
		class="modal-content"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modalTitle"
		transition:fade
	>
		<div class="modal-header">
			<h2 id="modalTitle" class="card-title">{title}</h2>
			<button class="modal-close" on:click={close} aria-label="Close modal">&times;</button>
		</div>
		<slot />
	</div>
</div>

<style lang="scss">
	.modal-overlay-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		.modal-overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
			border: none;
			cursor: pointer;
		}
	}

	.modal-content {
		position: relative;
		margin: auto;
		background: var(--modal-body);
		border-radius: 5px;
		max-width: 90%;
		width: 100%;
		max-height: 90%;
		overflow-y: auto;
		overflow-x: hidden;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

		.modal-header {
			background: var(--modal-header);
			display: flex;
			justify-content: space-between;
			margin-bottom: 1rem;
			padding: 1rem;
			h2 {
				margin: 0;
			}
		}
		@include respond-to(desktop) {
			max-width: 50%;
		}
	}
	.modal-close {
		position: relative;
		background: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>
