<script lang="ts">
	let name = '';
	let email = '';
	let message = '';

	let sending = false;
	let success = false;
	let error = '';

	async function handleSubmit(e) {
		e.preventDefault();
		sending = true;
		success = false;
		error = '';

		const form = new FormData();
		form.append('name', name);
		form.append('email', email);
		form.append('message', message);

		try {
			const res = await fetch('/contact', {
				method: 'POST',
				body: form
			});
			const result = await res.json();
			if (res.ok) {
				success = true;
				name = email = message = '';
			} else {
				throw new Error(result.error || 'Unknown error');
			}
		} catch (err) {
			error = err.message;
		} finally {
			sending = false;
		}
	}
</script>

<section id="contact">
	<div class="section-header overlap-content">
		<h4>Contact</h4>
	</div>
	<div class="section-content">
		<div class="contact-container">
			<div class="contact-info">
				<h2>Get In Touch</h2>
				<p>
					Feel free to reach out by submitting this form, or reach me directly at: <br /><br />
					<a href="mailto:vak@imvak.com">vak@imvak.com</a>.
				</p>
			</div>

			<div class="contact-form">
				<form on:submit={handleSubmit}>
					<label for="name">Name*</label>
					<input id="name" type="text" bind:value={name} required placeholder="Your name" />

					<label for="email">Email*</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						placeholder="you@example.com"
					/>

					<label for="message">Message*</label>
					<textarea
						id="message"
						bind:value={message}
						rows="5"
						required
						placeholder="Your message"
					/>

					<button type="submit" disabled={sending}>
						{sending ? 'Sending…' : 'Send'}
					</button>
				</form>

				{#if success}
					<p class="success">Thanks for your message! I'll be in touch soon.</p>
				{:else if error}
					<p class="error">Oops: {error}</p>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#contact {
		margin-bottom: 0;
		padding-left: 0;

		.section-content {
			background: var(--container-bg);
			border-radius: $radius-left;
			padding: 3rem 2rem $pad-1 2rem;
			font-size: 1.1rem;
			margin-bottom: 0;

			.contact-container {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.contact-info,
				.contact-form {
					flex: 1 1 45%;
					margin: 1rem;
				}

				.contact-info {
					h2 {
						margin-top: 0;
					}
					p {
						a {
							font-size: 1.3rem;
						}
					}
				}

				form {
					display: flex;
					flex-direction: column;

					label {
						margin-top: 1rem;
						font-weight: bold;
					}
					input,
					textarea {
						padding: 0.5rem;
						margin-top: 0.5rem;
						border: 1px solid #ccc;
						border-radius: 4px;
						max-width: 750px;
					}

					button {
						margin-top: 1rem;
						padding: 0.75rem 1rem;
						background-color: $amethyst;
						color: #fff;
						border: none;
						border-radius: 4px;
						cursor: pointer;
						transition: background 0.3s ease;

						&:hover {
							background-color: $cosmic-purple;
						}

						.success {
							color: green;
							margin-top: 1rem;
						}

						.error {
							color: red;
							margin-top: 1rem;
						}
					}
				}
			}
		}
	}
</style>
