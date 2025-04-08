export function observeVisibility(
	node: HTMLElement,
	setVisibility: (visible: boolean) => void
  ) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setVisibility(true);
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
