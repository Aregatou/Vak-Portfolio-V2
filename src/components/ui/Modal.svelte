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

<div class="modal-overlay" on:click={close} transition:fade>
	<div class="modal-content" on:click|stopPropagation transition:fade>
		<div class="modal-header">
			<h2 class="card-title">{title}</h2>
			<button class="modal-close" on:click={close} aria-label="Close modal">&times;</button>
		</div>
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
		background: var(--modal-body);
		// padding: 1rem;
		border-radius: 5px;
		position: relative;
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
