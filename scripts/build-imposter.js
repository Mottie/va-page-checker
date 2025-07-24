/* global add */
/* exported buildImposterCss */

// Build elements that should be web components CSS
/* eslint-disable-next-line no-unused-vars */
const buildImposterCss = () =>
  [
    add({
      selector: ['.va-modal', '[aria-modal]'],
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
      selector: [
        'a[href]:not([href^="tel:"]):not([class*="action-link"])',
        'a[download]',
        'a[target]',
        'a[rel]',
      ],
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
      selector: [
        'button[type="submit"]',
        'button[type="reset"]',
        'button[type="button"]',
        'button:not([type]):not(.va-alert-close)',
        ':has(> input[type="button"])',
      ],
      message: 'Imposter va-button',
    }),
    add({
      selector: ':has(> input[type="checkbox"])',
      message: 'Imposter va-checkbox',
    }),
    add({
      selector: ':has(> input[type="number"])',
      message: 'Imposter va-number-input',
      useAfter: true,
    }),
    // ignore inputs inside va-radio-option (open DOM)
    add({
      selector: ':has(> input[type="radio"]:not(.va-radio-option__input))',
      message: 'Imposter va-radio-option',
      useAfter: true,
    }),
    add({
      selector: ':has(> input[type="text"])',
      message: 'Imposter va-text-input',
      useAfter: true,
    }),
    add({
      selector: ':has(> input[type="search"])',
      message: 'Imposter va-search-input',
    }),
    add({
      selector: ':has(> input[type="file"])',
      message: 'Imposter va-file-input',
    }),
    add({
      selector: ':has(> select)',
      message: 'Imposter va-select',
    }),
    add({
      selector: ':has(> textarea)',
      message: 'Imposter va-textarea',
    }),
  ].flat();
