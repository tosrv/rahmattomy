export interface Experience {
	company: string;
	role: string;
	location: string;
	period: string;
	current?: boolean;
	highlights: string[];
	tags?: string[];
}

export const experience: Experience[] = [
	{
		company: 'PT Pionir Cipta Mulia',
		role: 'Full Stack Developer',
		location: 'Jakarta Raya, Indonesia',
		period: 'August 2026 – Present',
		current: true,
		highlights: [
			'Rebuilt a B2B export-import corporate website with product catalog, multilingual content, and customer inquiries.',
			'Built and maintained a WooCommerce store for a cosmetics brand, plus internal agency and portfolio sites with custom WordPress themes.',
		],
	},
	{
		company: 'PT Amal Bencana Rakyat Indonesia',
		role: 'Full Stack Developer',
		location: 'Jakarta Selatan, Indonesia',
		period: 'May 2026 – August 2026',
		highlights: [
			'Developed internal HR applications (attendance, payroll) and responsive corporate websites using a multilingual headless CMS.',
			'Deployed and managed a self-hosted Mailcow mail server, including SPF, DKIM, and DMARC DNS configuration.',
		],
		tags: ['Next.js', 'Headless CMS', 'Mailcow', 'DNS (SPF/DKIM/DMARC)', 'Linux'],
	},
];
