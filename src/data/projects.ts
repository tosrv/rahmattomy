export interface Project {
	title: string;
	description: string;
	tags: string[];
	year: number;
	href?: string;
}

export const projects: Project[] = [
	{
		title: 'Project One',
		description: 'Short description of the project and your role in it.',
		tags: ['Astro', 'Tailwind'],
		year: 2026,
		href: '#',
	},
	{
		title: 'Project Two',
		description: 'Short description of the project and your role in it.',
		tags: ['React', 'TypeScript'],
		year: 2025,
		href: '#',
	},
	{
		title: 'Project Three',
		description: 'Short description of the project and your role in it.',
		tags: ['Design', 'Branding'],
		year: 2025,
	},
];
