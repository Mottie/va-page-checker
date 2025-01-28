/* global add */
/* exported buildMissingCss */

// Build elements that should be web components CSS
/* eslint-disable-next-line no-unused-vars */
const buildMissingCss = () => [
	add('.va-modal', 'Not a va-modal'),
	add('.va-nav-breadcrumbs', 'Not a va-breadcrumbs'),
	add('a[href^="tel:"]', 'Not a va-telephone'),
	add('a[type="number"]', 'Not a va-number-input'),
	add('a[type="radio"]', 'Not a va-radio-option'),
	add('a[type="text"]', 'Not a va-text-input'),
	add('button[type]', 'Not a va-button'),
	add('input[type="checkbox"]', 'Not a va-checkbox'),
	add('input[type="search"]', 'Not a va-search-input'),
	add('select', 'Not a va-select'),
	add('textarea', 'Not a va-textarea'),
].flat();
