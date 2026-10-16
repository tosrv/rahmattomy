export interface Project {
	title: string;
	subtitle?: string;
	description: string;
	tags: string[];
	year?: number;
	image?: string;
	demo?: string;
	repo?: string;
}

export const projects: Project[] = [
	{
		title: 'U-Short',
		subtitle: 'URL Shortener & QR Code Generator',
		description:
			'A fast, minimalist URL shortener and QR code generator built with Golang, using server-side rendering and HTMX for zero-reload interactions with low memory overhead.',
		tags: ['Golang', 'SQLite', 'HTMX', 'Tailwind CSS'],
		image: '/projects/u-short.gif',
		demo: 'https://u-short.fly.dev',
		repo: 'https://github.com/tosrv/u-short',
	},
	{
		title: 'Yellow Store',
		subtitle: 'Mini E-Commerce System',
		description:
			'A full-featured store with Midtrans payment gateway webhook handlers, real-time inventory decrementing, and an authenticated admin dashboard for order fulfillment.',
		tags: ['Next.js', 'Midtrans', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
		image: '/projects/yellowstore.gif',
		demo: 'https://yellowstore-mu.vercel.app',
		repo: 'https://github.com/tosrv/Mini-Store',
	},
];
