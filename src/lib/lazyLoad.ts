export function lazyLoadImage(node: HTMLImageElement) {
	const src = node.getAttribute('data-src') || node.getAttribute('src');
	if (!src) {
		console.warn('lazyLoadImage: data-src not provided for', node);
		return;
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				node.setAttribute('src', src);
				observer.unobserve(node);
			}
		});
	});

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
