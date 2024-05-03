/* global COLORS, DEFAULT_SELECTORS, LAYOUT, USES_BEFORE */
/* exported buildA11yCss, buildDataDogCss, buildMissingCss, buildVersionCss */
const outline = color => `outline: dotted 5px ${color}; position: relative;`;
const message = (msg, color) =>
	`content: "${msg}"; background-color: ${color}; ${LAYOUT}`;

// Find & parse web component hydrated styling
// "va-a,va-b{visibility: hidden}.hydrated{visibility:inherit}"
const webComponentSelectors = () =>
	document.head.querySelector('style[data-styles]')?.textContent?.split('{')[0] ||
	DEFAULT_SELECTORS;

const add = (selector, msg, color = COLORS.ERROR, useAfter) => [
	`${selector} { ${outline(color)} }`,
	`${selector}${useAfter ? ':after' : ':before'} {
		${message(msg, color)}
	}`,
	`${selector}:hover { outline: none; }`,
	`${selector}:hover:before { content: ""; background-color: transparent; }`,
];

/* eslint-disable no-unused-vars */
// Build a11y selectors copied (test.css) from Smashing magazine "Apps For All"
// by Heydon Pickering
const buildA11yCss = () => [
	add('button:not([type])', 'Missing button type', COLORS.A11Y),
	add('[disabled]', 'Allow disabled?', COLORS.A11Y),
	add('a:not([href])', 'Missing href', COLORS.A11Y),
	add(
		'a:empty:not([aria-label]):not([aria-labelledby])',
		'Empty link with no label',
		COLORS.A11Y,
	),

	// Maybe too general
	// a:not([aria-label]):not([aria-labelledby])
	// button:not([aria-label]):not([aria-labelledby])

	add(
		'button:empty:not([aria-label]):not([aria-labelledby])',
		'Empty button with no label',
		COLORS.A11Y,
	),

	// img don't have interal content, so :before won't work here
	`img:only-child:not([alt]) { ${outline(COLORS.A11Y)} }`,
	'img:only-child:not([alt]):hover { outline: none; }',

	add('section > section:first-child', 'Nested sections', COLORS.A11Y),
	add(
		'[role="status"]:not([aria-live="polite"])',
		'Role status needs aria-live="polite"',
		COLORS.A11Y,
	),
	add(
		'[role="alert"]:not([aria-live="assertive"])',
		'Role alert needs aria-live="assertive"',
		COLORS.A11Y,
	),
	add(
		'[aria-live="polite"]:not([role="status"])',
		'Aria-live polite needs a role="status"',
		COLORS.A11Y,
	),
	add(
		'[aria-live="assertive"]:not([role="alert"])',
		'Aria-live assertive needs a role="alert"',
		COLORS.A11Y,
	),

	// Custom
	add(
		'a[target="_blank"]:not([ref*="noreferrer"], [ref*="noopener"])',
		'Link opening new tab missing noreferrer and/or noopener',
		COLORS.A11Y,
	),
	add(
		// include role because of va-additional-info expander uses 'a[role="button"]'
		'a:not([role], [href^="#"], [href^="/"], [href*="va.gov"], [href^="tel:"], [href^="sms:"], [href^="mailto:"]):not([ref*="noreferrer"], [ref*="noopener"])',
		'External Link missing noreferrer and/or noopener',
		COLORS.A11Y,
	),
].flat();

const buildDataDogCss = () => [
	add('.dd-privacy-hidden', 'DataDog Hidden', COLORS.DATADOG),
	add('[data-dd-privacy="hidden"]', 'DataDog Hidden', COLORS.DATADOG),
	add('.dd-privacy-mask', 'DataDog Mask', COLORS.DATADOG),
	add('[data-dd-privacy="mask"]', 'DataDog Mask', COLORS.DATADOG),
	add(
		'.dd-privacy-mask[data-dd-action-name]',
		' DataDog Mask + " attr(data-dd-action-name) " action name',
		COLORS.DATADOG,
	),
	add(
		'.dd-privacy-hidden[data-dd-action-name]',
		' DataDog Hidden + " attr(data-dd-action-name) " action name',
		COLORS.DATADOG,
	),
].flat();

// Build elements that should be web components CSS
const buildMissingCss = () => [
	add('.va-modal', 'Not a va-modal'),
	add('.va-nav-breadcrumbs', 'Not a va-breadcrumbs'),
	add('a[href^="tel:"]', 'Not a va-telephone'),
	add('a[type="number"]', 'Not a va-number-input'),
	add('a[type="radio"]', 'Not a va-radio-option'),
	add('a[type="text"]', 'Not a va-text-input'),
	add('button[type]', 'Not a va-button'),
	add('input[type="checkbox"]', 'Not a va-checkbox'),
	add('input[type="search"]', 'Not a va-search-input'),
	add('select', 'Not a va-select'),
	add('textarea', 'Not a va-textarea'),
].flat();

// Build v1 and v3 web component CSS
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
