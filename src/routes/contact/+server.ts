// src/routes/contact/+server.ts
import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, DESTINATION_EMAIL } from '$env/static/private';

export async function POST(event: RequestEvent) {
	const form = await event.request.formData();
	const name = form.get('name');
	const email = form.get('email');
	const message = form.get('message');

	// Basic type‐guards
	if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
		return json({ error: 'Invalid form data.' }, { status: 400 });
	}

	// Trim whitespace
	const trimmedName = name.trim();
	const trimmedEmail = email.trim();
	const trimmedMessage = message.trim();

	// Validate presence
	if (!trimmedName || !trimmedEmail || !trimmedMessage) {
		return json({ error: 'All fields are required.' }, { status: 400 });
	}

	// Validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(trimmedEmail)) {
		return json({ error: 'Invalid email format.' }, { status: 400 });
	}

	// Validate lengths
	if (trimmedName.length > 100) {
		return json({ error: 'Name is too long.' }, { status: 400 });
	}
	if (trimmedMessage.length > 2000) {
		return json({ error: 'Message is too long.' }, { status: 400 });
	}

	// Ensure env vars are present
	if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !DESTINATION_EMAIL) {
		console.error('Missing required environment variables.');
		return json({ error: 'Server configuration error.' }, { status: 500 });
	}

	const transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		port: Number(SMTP_PORT),
		secure: Number(SMTP_PORT) === 465, // true for port 465 (SSL), false for others (STARTTLS)
		auth: {
			user: SMTP_USER,
			pass: SMTP_PASS
		}
	});

	try {
		await transporter.sendMail({
			from: `"Contact Form" <${SMTP_USER}>`,
			to: DESTINATION_EMAIL,
			replyTo: `"${trimmedName}" <${trimmedEmail}>`,
			subject: `New message from ${trimmedName}`,
			text: trimmedMessage,
			html: `<p>${trimmedMessage.replace(/\n/g, '<br>')}</p>`
		});

		return json({ message: 'Message sent successfully!' }, { status: 200 });
	} catch (err) {
		console.error('Error sending email:', err);
		return json({ error: 'Failed to send message.' }, { status: 500 });
	}
}
