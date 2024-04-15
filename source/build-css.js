const COLOR_ERROR = 'darkred';
const COLOR_USWDS = 'orange';
const LAYOUT = [
	'position: absolute',
	'right: 0',
	'bottom: 0',
	'z-index: 1',
	'opacity: 90%',
	'padding: 3px',
	'color: #fff',
].join('; ');

const outline = color => `outline: dotted 5px ${color}; position: relative;`;
const message = (msg, color) =>
	`content: '${msg}'; background-color: ${color}; ${LAYOUT}`;

// const webComponentsOnPage = () => {
//   const tags = [...document.getElementsByTagName('*')]
//     .filter(tag => tag.tagName.startsWith('VA-'))
//     .map(tag => tag.tagName.toLowerCase());
//   return [...new Set(tags)];
// };

// Current list as of April 2024
const defaultSelectors = 'va-header-minimal,va-omb-info,va-date,va-memorable-date,va-notification,va-statement-of-truth,va-banner,va-button-pair,va-file-input,va-privacy-agreement,va-accordion,va-accordion-item,va-additional-info,va-alert-expandable,va-back-to-top,va-breadcrumbs,va-checkbox-group,va-icon,va-loading-indicator,va-maintenance-banner,va-minimal-footer,va-need-help,va-number-input,va-on-this-page,va-pagination,va-process-list,va-process-list-item,va-progress-bar,va-promo-banner,va-radio,va-radio-option,va-search-input,va-segmented-progress-bar,va-summary-box,va-table,va-table-row,va-textarea,va-alert,va-button,va-crisis-line-modal,va-official-gov-banner,va-card,va-link,va-checkbox,va-select,va-text-input,va-modal,va-telephone';

// Web components that use the :before psuedo element for styling - listed so we
// don't interfere
const usesBefore = new Set([
	'va-modal',
	'va-process-list-item',
	'va-table-row',
]);

// Don't inject missing web component css into web components these web
// components
const noMissingWcCss = new Set([
	'va-additional-info',
	'va-button',
	'va-checkbox',
	'va-number-input',
	'va-radio',
	'va-search-input',
	'va-telephone',
	'va-text-input',
]);

// Find & parse web component hydrated styling
// "va-a,va-b{visibility: hidden}.hydrated{visibility:inherit}"
const webComponentSelectors = () =>
	document.head.querySelector('style[data-styles]').textContent?.split('{')[0] ||
	defaultSelectors;

const add = (selector, msg, error = true, useAfter) => [
	`${selector} { ${outline(error ? COLOR_ERROR : COLOR_USWDS)} }`,
	`${selector}${useAfter ? ':after' : ':before'} {
		${message(msg, error ? COLOR_ERROR : COLOR_USWDS)}
	}`,
	`${selector}:hover { outline: none; }`,
	`${selector}:hover:before { content: ''; background-color: transparent; }`,
];

// Build v1 and v3 web component CSS
const buildWcCss = () =>
	webComponentSelectors().split(',').flatMap(wc => {
		const useAfter = usesBefore.has(wc);
		return [
			add(`${wc}[uswds="false"]`, `${wc} v1`, true, useAfter),
			add(`${wc}:not([uswds="false"])`, `${wc} v3`, false, useAfter),
		].flat();
	});

// Build elements that should be web components CSS
const buildMissingWcCss = () => [
	add('button[type]', 'Not a va-button'),
	add('input[type="checkbox"]', 'Not a va-checkbox'),
	add('.va-modal', 'Not a va-modal'),
	add('a[type="number"]', 'Not a va-number-input'),
	add('a[type="radio"]', 'Not a va-radio-option'),
	add('input[type="search"]', 'Not a va-search-input'),
	add('select', 'Not a va-select'),
	add('a[href^="tel:"]', 'Not a va-telephone'),
	add('a[type="text"]', 'Not a va-text-input'),
	add('textarea', 'Not a va-textarea'),
].flat();

// Build a11y selectors copied (test.css) from Smashing magazine "Apps For All"
// by Heydon Pickering
const buildExtraCss = () => [
	add('button:not([type])', 'Missing button type'),
	add('[disabled]', 'Allow disabled?'),
	add('a:not([href])', 'Missing href'),
	add(
		'a:empty:not([aria-label]):not([aria-labelledby])',
		'Empty link with no label',
	),

	// Maybe too general
	// a:not([aria-label]):not([aria-labelledby])
	// button:not([aria-label]):not([aria-labelledby])

	add(
		'button:empty:not([aria-label]):not([aria-labelledby])',
		'Empty button with no label',
	),

	// img don't have interal content, so :before won't work here
	`img:only-child:not([alt]) { ${outline(COLOR_ERROR)} }`,
	'img:only-child:not([alt]):hover { outline: none; }',

	add('section > section:first-child', 'Nested sections'),
	add(
		'[role="status"]:not([aria-live="polite"])',
		'Role status needs aria-live="polite"',
	),
	add(
		'[role="alert"]:not([aria-live="assertive"])',
		'Role alert needs aria-live="assertive"',
	),
	add(
		'[aria-live="polite"]:not([role="status"])',
		'Aria-live polite needs a role="status"',
	),
	add(
		'[aria-live="assertive"]:not([role="alert"])',
		'Aria-live assertive needs a role="alert"',
	),

	// Fix open va-modal
	'va-modal[visible] { position: fixed !important; }',

	// Custom
	add(
		'a[target="_blank"]:not([ref*="noreferrer"], [ref*="noopener"])',
		'Link opening new tab missing noreferrer and/or noopener',
	),
	add(
		// include role because of va-additional-info expander uses 'a[role="button"]'
		'a:not([role], [href^="#"], [href^="/"], [href*="va.gov"], [href^="tel:"], [href^="sms:"], [href^="mailto:"]):not([ref*="noreferrer"], [ref*="noopener"])',
		'External Link missing noreferrer and/or noopener',
	),
].flat();
