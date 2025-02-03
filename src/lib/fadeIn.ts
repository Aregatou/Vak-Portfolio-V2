export function fadeIn(node: HTMLElement, { threshold = 0.1 }: { threshold?: number } = {}) {
	if (node.dataset.fadeinApplied === 'true') return;
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('fade-in-section-visible');
					node.dataset.fadeinApplied = 'true';
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
