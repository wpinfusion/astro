// import type { ImageMetadata } from "astro";
// import type { CollectionEntry } from "astro:content";
// export type BlogPost = CollectionEntry<"blog">;

export interface ClassNameProps {
	class?: string;
}

export interface LayoutProps {
	title: string;
	seoTitle?: string;
	seoDescription?: string;
	noindex?: boolean;
	ogImage?: string;
	header?: string;
}

export interface ButtonProps extends ClassNameProps {
	color?: string;
	href?: string;
	newtab?: boolean;
	As?: "a" | "button";
	type?: "button" | "submit" | "reset";
}

export interface SectionProps extends ClassNameProps {
	id?: string;
}

export interface ContainerProps extends ClassNameProps {
	contain?: boolean;
}

export interface PageHeadingProps {
	xl?: boolean;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

// Menus
export type NavTarget = "_blank" | "_self" | "_parent" | "_top";

export interface NavItem {
	href: string;
	title: string;
	/** Appended to the default link classes. Use to extend or override defaults. */
	class?: string;
	/** Applied in addition to `class` when this item's href matches the current page. */
	activeClass?: string;
	target?: NavTarget;
	/** Explicitly set rel. When target is "_blank", "noopener noreferrer" is always added. */
	rel?: string;
	/** Sub-navigation items — renders as a dropdown on desktop, disclosure on mobile. */
	children?: NavItem[];
	/** Any other valid anchor attributes (e.g. download, hreflang, ping, …). */
	[key: string]: unknown;
}

export type NavMenu = NavItem[];

export interface FooterNavItem {
	href: string;
	title: string;
	class?: string;
	target?: NavTarget;
	rel?: string;
	[key: string]: unknown;
}

export interface FooterMenu {
	title: string;
	items: FooterNavItem[];
}
