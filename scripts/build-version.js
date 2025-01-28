/* global COLORS, add, webComponentSelectors, USES_BEFORE */
/* exported buildVersionCss */

// Build v1 and v3 web component CSS
/* eslint-disable-next-line no-unused-vars */
const buildVersionCss = () => [
	...webComponentSelectors().split(',').flatMap(wc => {
		const useAfter = USES_BEFORE.has(wc);
		return [
			add(`${wc}[uswds="false"]`, `${wc} v1`, COLORS.ERROR, useAfter),
			add(`${wc}:not([uswds="false"])`, `${wc} v3`, COLORS.USWDS, useAfter),
		].flat();
	}),

	// Fix open va-modal
	'va-modal[visible] { position: fixed !important; }',
];
