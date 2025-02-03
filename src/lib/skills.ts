export interface Skill {
	title: string;
	svgMarkup: string;
	color: string;
	percentage: number;
}

export const frontEndSkills: Skill[] = [
	{ title: 'JavaScript', svgMarkup: 'javascript', color: '#f7df1e', percentage: 100 },
	{ title: 'HTML / CSS', svgMarkup: 'html', color: '#333', percentage: 100 },
	{ title: 'Svelte', svgMarkup: 'svelte', color: '#ff794c', percentage: 90 },
	{ title: 'Angular', svgMarkup: 'angular', color: '#dd1b16', percentage: 70 },
	{ title: 'React', svgMarkup: 'react', color: '#149eca', percentage: 55 },
	{ title: 'TypeScript', svgMarkup: 'typescript', color: '#7fa2c9', percentage: 72 },
	{ title: 'jQuery', svgMarkup: 'jquery', color: '#0769ad', percentage: 82 },
	{ title: 'SASS/SCSS', svgMarkup: 'sass', color: '#CF649A', percentage: 90 }
];

export const otherSkills: Skill[] = [
	{ title: 'Drupal', svgMarkup: 'drupal', color: '#0678be', percentage: 86 },
	{ title: 'Docker', svgMarkup: 'docker', color: '#1d63ed', percentage: 62 },
	{ title: 'Moqups / Figma', svgMarkup: 'figma', color: '#0acf83', percentage: 65 },
	{ title: 'Git / Github / Version Control', svgMarkup: 'git', color: '#fff', percentage: 80 },
	{ title: 'UnRaid Server Management', svgMarkup: 'unraid', color: '#F05A2E', percentage: 80 },
	{ title: 'Jira', svgMarkup: 'jira', color: '#3491F6', percentage: 85 },
	{ title: 'Slack / MS Teams / Zoom', svgMarkup: 'slack', color: '#5E1E66', percentage: 100 },
	{ title: 'Agile + Scrum Workflow', svgMarkup: 'scrum', color: '#5A72E9', percentage: 100 }
];
