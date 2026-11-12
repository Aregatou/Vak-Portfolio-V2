<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let title = '';

	const dispatch = createEventDispatcher();
	let dialog: HTMLDialogElement;
	let opened = false;

	onMount(() => {
		dialog.showModal();
		document.documentElement.classList.add('modal-open');
		opened = true;

		return () => {
			document.documentElement.classList.remove('modal-open');
			dialog.close();
		};
	});

	const close = () => dispatch('close');

	const dismissBackdrop = (event: PointerEvent) => {
		if (event.target === dialog) close();
	};
</script>

<dialog
	bind:this={dialog}
	aria-labelledby="modalTitle"
	on:cancel|preventDefault={close}
	on:pointerup={dismissBackdrop}
	transition:fade
>
	<div class="modal-content">
		<div class="modal-header">
			<h2 id="modalTitle" class="card-title">{title}</h2>
			<button type="button" class="modal-close" on:click={close} aria-label="Close modal">
				&times;
			</button>
		</div>
		{#if opened}
			<slot />
		{/if}
	</div>
</dialog>

<style lang="scss">
	:global(html.modal-open),
	:global(html.modal-open body) {
		overflow: hidden !important;
	}

	dialog {
		width: 90%;
		max-width: none;
		max-height: none;
		padding: 0;
		border: none;
		border-radius: 5px;
		background: var(--modal-body);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

		&::backdrop {
			background: rgba(0, 0, 0, 0.75);
		}

		@include respond-to(desktop) {
			width: 50%;
		}
	}

	.modal-content {
		max-height: 90vh;
		max-height: 90dvh;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.modal-header {
		background: var(--modal-header);
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
		padding: 1rem;

		h2 {
			margin: 0;
		}

		@include respond-to(extra-small) {
			position: sticky;
			top: 0;
			z-index: 2;
			margin-bottom: 0;
		}
	}

	.modal-close {
		background: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>
