import type { NavItem } from "@/types";

/**
 * Generates a unique popover ID for a nav item's desktop dropdown menu.
 * Used as the `id` attribute on `<el-popover>` elements.
 */
export function popoverId(item: NavItem): string {
	return `desktop-menu-${item.title.toLowerCase().replace(/\s+/g, "-")}`;
}

/**
 * Generates a unique disclosure ID for a nav item's mobile accordion menu.
 * Used as the `id` attribute on `<el-disclosure>` elements.
 */
export function disclosureId(item: NavItem): string {
	return `mobile-menu-${item.title.toLowerCase().replace(/\s+/g, "-")}`;
}

/**
 * Resolves the `rel` attribute for an anchor element.
 * Automatically prepends `noopener noreferrer` when `target="_blank"`,
 * and merges any additional rel values provided.
 */
export function linkRel(target?: string, rel?: string): string | undefined {
	if (target === "_blank") {
		const extra = rel ? ` ${rel}` : "";
		return `noopener noreferrer${extra}`.trim();
	}
	return rel || undefined;
}

/**
 * Returns true if the given nav item's href matches the current page path.
 * Pass `Astro.url.pathname` as `currentPath`.
 */
export function isActive(item: NavItem, currentPath: string): boolean {
	return !!item.href && currentPath === item.href;
}
