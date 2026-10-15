// Central content for the site. Edit text and links here — components only handle layout.

export interface Link {
	label: string;
	href: string;
}

export const seo = {
	title: 'Rahmat Tomy',
	description: 'Portfolio of Rahmat Tomy.',
};

export const profile = {
	name: 'Rahmat Tomy Apriliyanto',
	shortName: 'Rahmat Tomy',
	role: 'Full Stack Developer',
	email: 'me@rahmattomy.com',
	location: 'Jakarta Selatan, Indonesia',
	timezone: 'Asia/Jakarta',
	timezoneLabel: 'UTC+7',
};

export const socials: Link[] = [
	{ label: 'GitHub', href: 'https://github.com/tosrv' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/rahmattomy' },
	{ label: 'Email', href: `mailto:${profile.email}` },
];

export const navLinks: Link[] = [
	{ label: 'Projects', href: '#projects' },
	{ label: 'Work', href: '#work' },
	{ label: 'About', href: '#about' },
	{ label: 'Contact', href: '#contact' },
];

export const hero = {
	greeting: 'Hi, I am',
	stack: ['Express.js', 'React.js', 'Next.js', 'PostgreSQL'],
	tagline:
		'Focused on building clean, practical web applications with modern frontend and backend technologies while continuously learning and growing.',
	primaryCta: { label: 'View Projects', href: '#projects' },
	secondaryCta: { label: 'Download CV', href: 'https://github.com/tosrv' },
};

export const projectsSection = {
	title: 'Selected Projects',
};

export const workSection = {
	title: 'Work Experience',
	currentLabel: 'Current',
};

export const about = {
	title: 'About',
	paragraphs: [
		'A few sentences about your background, experience, and what drives your work.',
		"What you're focused on now and the kind of projects you enjoy.",
	],
	skills: ['Astro', 'TypeScript', 'Tailwind CSS', 'React', 'UI Design', 'Figma'],
};

export const contact = {
	title: "Let's work together.",
	description: 'Have a project in mind? Drop me a message.',
};

export const footer = {
	copyright: `${profile.shortName}. All rights reserved.`,
};
