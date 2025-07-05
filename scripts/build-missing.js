/* global add */
/* exported buildMissingCss */

// Build elements that should be web components CSS
/* eslint-disable-next-line no-unused-vars */
const buildMissingCss = () => [
	add({
		selector: '.va-modal',
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
		selector: 'a[type="number"]',
		message: 'Imposter va-number-input',
		useAfter: true,
	}),
	add({
		selector: 'a[type="radio"]',
		message: 'Imposter va-radio-option',
		useAfter: true,
	}),
	add({
		selector: 'a[type="text"]',
		message: 'Imposter va-text-input',
		useAfter: true,
	}),
	add({
		selector: 'a:not([type])',
		message: 'Imposter va-link',
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
