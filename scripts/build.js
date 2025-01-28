/* global COLORS, DEFAULT_SELECTORS, LAYOUT */
/* exported outline, message, webComponentSelectors, add */
/* eslint-disable no-unused-vars */

const outline = color => `outline: dotted 5px ${color}; position: relative;`;

const message = (msg, color) =>
	`content: "${msg.replace(/"/g, '\\"')}"; background-color: ${color}; ${LAYOUT}`;

// Find & parse web component hydrated styling
// "slot-fb{...}va-a,va-b{visibility: hidden}.hydrated{visibility:inherit}"
const webComponentSelectors = () => {
	const text = document.head.querySelector('style[data-styles]')?.textContent || '';
	const start = text.indexOf('}va-') + 1;
	const end = text.lastIndexOf('{visibility:hidden}');
	return (end - start > 500) ? text.slice(start, end) : DEFAULT_SELECTORS;
};

const add = (selector, msg, color = COLORS.ERROR, useAfter) => [
	`${selector} { ${outline(color)} }`,
	`${selector}${useAfter ? ':after' : ':before'} {
		${message(msg, color)}
	}`,
	`${selector}:hover { outline: none; }`,
	`${selector}:hover:before { content: ""; background-color: transparent; }`,
];
