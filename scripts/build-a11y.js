/* global COLORS, add, outline */
/* exported buildA11yCss */

// Build a11y selectors copied (test.css) from Smashing magazine "Apps For All"
// by Heydon Pickering
/* eslint-disable-next-line no-unused-vars */
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
	// Target image wrapper to include a message
	add(':has(> img:not([alt]))', 'Missing image alt', COLORS.A11Y),

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
		'a[target="_blank"]:not([rel*="noreferrer"], [rel*="noopener"])',
		'Link opening new tab missing noreferrer and/or noopener',
		COLORS.ERROR,
	),
	add(
		// include role because of va-additional-info expander uses 'a[role="button"]'
		'a:not([role], [href^="#"], [href^="/"], [href*="va.gov"], [href^="tel:"], [href^="sms:"], [href^="mailto:"]):not([rel*="noreferrer"], [rel*="noopener"])',
		'External Link missing noreferrer and/or noopener',
		COLORS.ERROR,
	),
].flat();
