/* global COLORS, DEFAULT_SELECTORS, LAYOUT */
/* exported outline, message, webComponentSelectors, add */
/* eslint-disable no-unused-vars */

const outline = color => `outline: dotted 5px ${color}; position: relative;`;

const formatMessage = (msg, color, escapeQuotes) =>
  `content: "${
    escapeQuotes ? msg.replace(/"/g, '\\"') : msg
  }"; white-space:pre; background-color: ${color}; ${LAYOUT}`;

// Find & parse web component hydrated styling
// "slot-fb{...}va-a,va-b{visibility: hidden}.hydrated{visibility:inherit}"
const webComponentSelectors = () => {
  const text =
    document.head.querySelector('style[data-styles]')?.textContent || '';
  const start = text.indexOf('}va-') + 1;
  const end = text.lastIndexOf('{visibility:hidden}');
  // Check selector string length, in case format changed; fallback to default
  return end - start > 500 ? text.slice(start, end) : DEFAULT_SELECTORS;
};

const add = ({
  selector,
  message,
  color = COLORS.ERROR,
  useAfter = false,
  escapeQuotes = true,
}) => {
  const isArray = Array.isArray(selector);
  const ending = useAfter ? ':after' : ':before';
  const selBeforeOrAfter = `${
    isArray ? selector.join(`${ending},`) : selector
  }${ending}`;
  const selHover = `${isArray ? selector.join(':hover,') : selector}:hover`;
  const selHoverEnd = `${
    isArray ? selector.join(`:hover${ending},`) : selector
  }:hover${ending}`;
  return [
    `${selector} { ${outline(color)} }`,
    `${selBeforeOrAfter} {
    ${formatMessage(message, color, escapeQuotes)}
  }`,
    `${selHover} { outline: none; }`,
    `${selHoverEnd} {
    content: ""; background-color: transparent;
  }`,
  ];
};
