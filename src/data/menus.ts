import type { NavMenu, FooterMenu } from "../types";

export const mainNav: NavMenu = [
	{
		href: "#",
		title: "Product",
		children: [
			{ href: "#", title: "Analytics" },
			{ href: "#", title: "Engagement" },
			{ href: "#", title: "Security" },
			{ href: "#", title: "Integrations" },
			{ href: "#", title: "Automations" },
		],
	},
	{ href: "#", title: "Features" },
	{ href: "#", title: "Marketplace" },
	{ href: "#", title: "Company" },
];

export const footerNavs: FooterMenu[] = [
	{
		title: "Solutions",
		items: [
			{ href: "#", title: "Marketing" },
			{ href: "#", title: "Analytics" },
			{ href: "#", title: "Automation" },
			{ href: "#", title: "Commerce" },
			{ href: "#", title: "Insights" },
		],
	},
	{
		title: "Support",
		items: [
			{ href: "#", title: "Submit ticket" },
			{ href: "#", title: "Documentation" },
			{ href: "#", title: "Guides" },
		],
	},
	{
		title: "Company",
		items: [
			{ href: "#", title: "About" },
			{ href: "#", title: "Blog" },
			{ href: "#", title: "Jobs" },
			{ href: "#", title: "Press" },
		],
	},
	{
		title: "Legal",
		items: [
			{ href: "#", title: "Terms of service" },
			{ href: "#", title: "Privacy policy" },
			{ href: "#", title: "License" },
		],
	},
];
