/* global COLORS, DEFAULT_SELECTORS, LAYOUT */
/* exported outline, message, webComponentSelectors, add */
/* eslint-disable no-unused-vars */

const outline = color => `outline: dotted 5px ${color}; position: relative;`;

const formatMessage = (msg, color, escapeQuotes) =>
	`content: "${escapeQuotes ? msg.replace(/"/g, '\\"') : msg
		}"; white-space:pre; background-color: ${color}; ${LAYOUT}`;

// Find & parse web component hydrated styling
// "slot-fb{...}va-a,va-b{visibility: hidden}.hydrated{visibility:inherit}"
const webComponentSelectors = () => {
	const text = document.head.querySelector('style[data-styles]')?.textContent || '';
	const start = text.indexOf('}va-') + 1;
	const end = text.lastIndexOf('{visibility:hidden}');
	return (end - start > 500) ? text.slice(start, end) : DEFAULT_SELECTORS;
};

const add = ({
	selector,
	message,
	color = COLORS.ERROR,
	useAfter = false,
	escapeQuotes = true,
}) => [
	`${selector} { ${outline(color)} }`,
	`${selector}${useAfter ? ':after' : ':before'} {
	  ${formatMessage(message, color, escapeQuotes)}
	}`,
	`${selector}:hover { outline: none; }`,
	`${selector}:hover${useAfter ? ':after' : ':before'} {
	  content: ""; background-color: transparent;
	}`,
];
