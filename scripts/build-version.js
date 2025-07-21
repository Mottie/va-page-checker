/* global COLORS, add, webComponentSelectors, USES_BEFORE, DEPRECATED_WEB_COMPONENTS */
/* exported buildVersionCss */

// Build web component CSS
/* eslint-disable-next-line no-unused-vars */
const buildVersionCss = () => [
  ...webComponentSelectors().split(',').flatMap(wc => {
    const useAfter = USES_BEFORE.has(wc);
    const isDeprecated = DEPRECATED_WEB_COMPONENTS.includes(wc);
    return add({
        selector: wc,
        message: isDeprecated ? `Deprecated ${wc}` : wc,
        color: COLORS[isDeprecated ? 'ERROR' : 'USWDS'],
        useAfter,
      });
  }),

  // Fix open va-modal
  'va-modal[visible] { position: fixed !important; }',
];
