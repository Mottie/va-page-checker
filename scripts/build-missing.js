/* global add */
/* exported buildMissingCss */

// Build elements that should be web components CSS
/* eslint-disable-next-line no-unused-vars */
const buildMissingCss = () =>
  [
    add({
      selector: '.va-modal, [aria-modal]',
      message: 'Imposter va-modal',
    }),
    add({
      selector: '.va-nav-breadcrumbs',
      message: 'Imposter va-breadcrumbs',
    }),
    add({
      selector: 'a[href^="tel:"]',
      message: 'Imposter va-telephone',
      useAfter: true,
    }),
    add({
      selector: 'a:not([href]), a[download], a[target], a[rel]',
      message: 'Imposter va-link',
      useAfter: true,
    }),
    add({
      selector: 'a[class*="action-link"]',
      message: 'Imposter va-link-action',
      useAfter: true,
    }),

    // Override positioning on skip focus buttons for VA & Storybook
    'a.show-on-focus, a.show-on-focus:after, a[title="Skip to sidebar"], a[title="Skip to sidebar"]:after { position: absolute !important; }',

    // Targets buttons that should be a va-additional-info (official gov website banner)
    // But also includes vetnav-menu (mega-menu)
    add({
      selector: 'button[aria-expanded]',
      message: 'Imposter button?',
    }),
    add({
      selector: 'button[type]',
      message: 'Imposter va-button',
    }),
    add({
      selector: 'input[type="checkbox"]',
      message: 'Imposter va-checkbox',
    }),
    add({
      selector: 'input[type="number"]',
      message: 'Imposter va-number-input',
      useAfter: true,
    }),
    // ignore inputs inside va-radio-option (open DOM)
    add({
      selector: 'input[type="radio"]:not(.va-radio-option__input)',
      message: 'Imposter va-radio-option',
      useAfter: true,
    }),
    add({
      selector: 'input[type="text"]',
      message: 'Imposter va-text-input',
      useAfter: true,
    }),
    add({
      selector: 'input[type="search"]',
      message: 'Imposter va-search-input',
    }),
    add({
      selector: 'select',
      message: 'Imposter va-select',
    }),
    add({
      selector: 'textarea',
      message: 'Imposter va-textarea',
    }),
  ].flat();
