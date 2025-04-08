<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	const dispatch = createEventDispatcher();

	const close = () => {
		dispatch('close');
	};

	const handleKeydown = (event) => {
		if (event.key === 'Escape') {
			close();
		}
	};

	window.addEventListener('keydown', handleKeydown);
	onDestroy(() => window.removeEventListener('keydown', handleKeydown));
</script>

<div class="modal-overlay" on:click={close} transition:fade>
	<div class="modal-content" on:click|stopPropagation transition:fade>
		<button class="modal-close" on:click={close} aria-label="Close modal">&times;</button>
		<slot />
	</div>
</div>

<style lang="scss">
	.modal-overlay {
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
	}
	.modal-content {
		background: var(--modal-bg);
		color: var(--modal-text);
		padding: 1rem;
		border-radius: 5px;
		position: relative;
		max-width: 90%;
		width: 100%;
		max-height: 90%;
		overflow-y: auto;
		overflow-x: hidden;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		@include respond-to(desktop) {
			max-width: 50%;
		}
	}
	.modal-close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>
