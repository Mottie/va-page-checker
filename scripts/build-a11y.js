/* global COLORS, add, outline */
/* exported buildA11yCss */

// Build a11y selectors copied (test.css) from Smashing magazine "Apps For All"
// by Heydon Pickering
/* eslint-disable-next-line no-unused-vars */
const buildA11yCss = () =>
	[
		add({
			selector: 'button:not([type])',
			message: 'Missing button type',
			color: COLORS.A11Y,
		}),
		add({
			selector: '[disabled]',
			message: 'Allow disabled?',
			color: COLORS.A11Y,
		}),
		add({
			selector: 'a:not([href])',
			message: 'Missing href',
			color: COLORS.A11Y,
		}),
		add({
			selector: 'a:empty:not([aria-label]):not([aria-labelledby])',
			message: 'Empty link with no label',
			color: COLORS.A11Y,
		}),

		// Maybe too general
		// a:not([aria-label]):not([aria-labelledby])
		// button:not([aria-label]):not([aria-labelledby])

		add({
			selector: 'button:empty:not([aria-label]):not([aria-labelledby])',
			message: 'Empty button with no label',
			color: COLORS.A11Y,
		}),

		// img don't have interal content, so :before won't work here
		`img:only-child:not([alt]) { ${outline(COLORS.A11Y)} }`,
		'img:only-child:not([alt]):hover { outline: none; }',

		// Target image wrapper to include a message
		add({
			selector: ':has(> img:not([alt]))',
			message: 'Missing image alt',
			color: COLORS.A11Y,
		}),

		add({
			selector: 'section > section:first-child',
			message: 'Nested sections',
			color: COLORS.A11Y,
		}),
		add({
			selector: '[role="status"]:not([aria-live="polite"])',
			message: 'Role status needs aria-live="polite"',
			color: COLORS.A11Y,
		}),
		add({
			selector: '[role="alert"]:not([aria-live="assertive"])',
			message: 'Role alert needs aria-live="assertive"',
			color: COLORS.A11Y,
		}),
		add({
			selector: '[aria-live="polite"]:not([role="status"])',
			message: 'Aria-live polite needs a role="status"',
			color: COLORS.A11Y,
		}),
		add({
			selector: '[aria-live="assertive"]:not([role="alert"])',
			message: 'Aria-live assertive needs a role="alert"',
			color: COLORS.A11Y,
		}),

		// Custom
		add({
			selector:
				'a[target="_blank"]:not([rel*="noreferrer"], [rel*="noopener"])',
			message: 'Link opening new tab missing noreferrer and/or noopener',
			color: COLORS.ERROR,
		}),
		add({
			selector:
				// include role because of va-additional-info expander uses 'a[role="button"]'
				'a:not([role], [href^="#"], [href^="/"], [href*="va.gov"], [href^="tel:"], [href^="sms:"], [href^="mailto:"]):not([rel*="noreferrer"], [rel*="noopener"])',
			message: 'External Link missing\\a noreferrer and/or noopener',
			color: COLORS.ERROR,
		}),
		// adding aria-hidden to stuff that shouldn't have it
		add({
			selector: '[aria-hidden="true"]:not(img, svg, :empty)',
			message: 'aria-hidden',
			color: COLORS.A11Y,
		}),
		add({
			selector: ':has(> :is(.sr-only, .usa-sr-only))',
			message: 'contains screen-reader only text',
			color: COLORS.A11Y,
		}),
	].flat();
