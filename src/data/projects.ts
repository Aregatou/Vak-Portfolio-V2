import artProjects from '$data/artProjects.json';

export interface ImageData {
	src: string;
	alt: string;
}

export interface Project {
	title: string;
	heroImage: string;
	images: ImageData[];
	description: string;
}

export const projects: Project[] = [
	{
		title: 'Watercolor Goku',
		heroImage: artProjects['goku-v1'][6].src,
		images: artProjects['goku-v1'] as ImageData[],
		description:
			'Woodburned design, painted in watercolor, burned outer edge with a blowtorch, stained with pecan wood stain, and finally a few layers of lacquer creating a nice reflective finish.'
	},
	{
		title: 'Odesza Lumina',
		heroImage: artProjects['wood-panel'][0].src,
		images: artProjects['wood-panel'] as ImageData[],
		description: ''
	},
	{
		title: 'Psychadelic Quincy',
		heroImage: artProjects['quincy'][9].src,
		images: artProjects['quincy'] as ImageData[],
		description: ''
	},
	{
		title: 'Paint Drip Blue Jay',
		heroImage: artProjects['blue-jay'][5].src,
		images: artProjects['blue-jay'] as ImageData[],
		description: ''
	},
	{
		title: 'Lumpy Space Princess',
		heroImage: artProjects['LSP'][8].src,
		images: artProjects['LSP'] as ImageData[],
		description: ''
	},
	{
		title: 'Woodburned Elephant',
		heroImage: artProjects['elephant'][6].src,
		images: artProjects['elephant'] as ImageData[],
		description: ''
	},
	{
		title: 'Mother & Son',
		heroImage: artProjects['holding-son'][4].src,
		images: artProjects['holding-son'] as ImageData[],
		description: ''
	},
	{
		title: 'Custom Ottoman',
		heroImage: artProjects['ottoman'][11].src,
		images: artProjects['ottoman'] as ImageData[],
		description: ''
	},
	{
		title: 'Sword Mount',
		heroImage: artProjects['sword-mount'][2].src,
		images: artProjects['sword-mount'] as ImageData[],
		description: ''
	}
];
