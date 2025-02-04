export interface Skill {
	title: string;
	svgMarkup: string;
	color: string;
	percentage: number;
}

export interface Experience {
	organization: string;
	period: string;
	img: string;
	alt: string;
	link: string;
	small: string;
	description: string;
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

export const timelineExperiences: Experience[] = [
	{
		organization: 'NCBI',
		period: '2022 - present',
		img: '/images/logos/ncbi.png',
		alt: 'NCBI logo',
		link: 'https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/',
		small: '',
		description: 'National Center for Biotechnology Information'
	},
	{
		organization: 'NIBIB',
		period: '2020 - 2022',
		img: '/images/logos/nibib.jpg',
		alt: 'Logo for the National Institute of Biomedical Imaging and Bioengineering',
		link: 'https://www.nibib.nih.gov/',
		small: '',
		description: 'National Institute of Biomedical Imaging and Bioengineering'
	},
	{
		organization: 'CDC',
		period: '2018 - 2020',
		img: '/images/logos/cdc.png',
		alt: 'Logo for the Center for Disease Control',
		link: 'https://www.cdc.gov/index.htm',
		small: 'img-shrink',
		description: 'Center for Disease Control'
	},
	{
		organization: 'NIDA',
		period: '2018 - 2022',
		img: '/images/logos/nida.png',
		alt: 'Logo for the National Institute on Drug Abuse',
		link: 'https://www.nidcd.nih.gov/',
		small: '',
		description: 'National Institute on Drug Abuse'
	},
	{
		organization: 'NIAMS',
		period: '2018 - 2019',
		img: '/images/logos/niams.png',
		alt: 'Logo for the National Institute of Arthritis and Musculoskeletal and Skin Diseases',
		link: 'https://www.niams.nih.gov/',
		small: '',
		description: 'National Institute of Arthritis and Musculoskeletal and Skin Diseases'
	},
	{
		organization: 'NIAAA',
		period: '2017 - 2019',
		img: '/images/logos/niaaa.png',
		alt: 'Logo for the National Institute of Alcohol Abuse and Alcoholism',
		link: 'https://www.niaaa.nih.gov/',
		small: '',
		description: 'National Institute of Alcohol Abuse and Alcoholism'
	},
	{
		organization: 'NIDCD',
		period: '2017 - 2018',
		img: '/images/logos/nidcd.png',
		alt: 'Logo for the National Institute on Deafness and Other Communication Disorders',
		link: 'https://www.nidcd.nih.gov/',
		small: '',
		description: 'National Institute on Deafness and Other Communication Disorders'
	},
	{
		organization: 'NIDCR',
		period: '2017 - 2018',
		img: '/images/logos/nidcr.png',
		alt: 'Logo for the National Institute of Dental and Craniofacial Research',
		link: 'https://www.nidcr.nih.gov/',
		small: '',
		description: 'National Institute of Dental and Craniofacial Research'
	},
	{
		organization: 'SAMHSA',
		period: '2017 - 2018',
		img: '/images/logos/samhsa.png',
		alt: 'Logo for the Substance Abuse and Mental Health Services Administration',
		link: 'https://www.samhsa.gov/',
		small: '',
		description: 'Substance Abuse and Mental Health Services Administration'
	},
	{
		organization: 'ODP',
		period: '2017 - 2018',
		img: '/images/logos/odp.png',
		alt: 'Logo for the Office of Disease Prevention',
		link: 'https://prevention.nih.gov/',
		small: '',
		description: 'Office of Disease Prevention'
	}
];
