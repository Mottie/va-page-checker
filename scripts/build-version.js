/* global COLORS, add, webComponentSelectors, USES_BEFORE */
/* exported buildVersionCss */

// Build web component CSS
/* eslint-disable-next-line no-unused-vars */
const buildVersionCss = () => [
	...webComponentSelectors().split(',').flatMap(wc => {
		const useAfter = USES_BEFORE.has(wc);
		return add({ selector: wc, message: wc, color: COLORS.USWDS, useAfter });
	}),

	// Fix open va-modal
	'va-modal[visible] { position: fixed !important; }',
];
