/* eslint-disable no-unused-vars */
/* global COLORS, DEFAULT_SELECTORS, LAYOUT, USES_BEFORE, WC_NO_INJECT */
/* exported COLORS, DEFAULT_SELECTORS, LAYOUT, USES_BEFORE, WC_NO_INJECT */
const COLORS = {
	ERROR: '#5D1818',
	USWDS: '#205D18',
	A11Y: '#706100',
	DATADOG: '#5D185B',
};
const LAYOUT = [
	'position: absolute',
	'left: 0',
	'top: 0',
	'z-index: 1',
	'opacity: 85%',
	'padding: 3px',
	'color: #fff',
	'min-width: 200px',
].join('; ');

// Current list as of April 2024; only used as a fallback
const DEFAULT_SELECTORS = 'va-header-minimal,va-omb-info,va-date,va-memorable-date,va-notification,va-statement-of-truth,va-banner,va-button-pair,va-file-input,va-privacy-agreement,va-accordion,va-accordion-item,va-additional-info,va-alert-expandable,va-back-to-top,va-breadcrumbs,va-checkbox-group,va-icon,va-loading-indicator,va-maintenance-banner,va-minimal-footer,va-need-help,va-number-input,va-on-this-page,va-pagination,va-process-list,va-process-list-item,va-progress-bar,va-promo-banner,va-radio,va-radio-option,va-search-input,va-segmented-progress-bar,va-summary-box,va-table,va-table-row,va-textarea,va-alert,va-button,va-crisis-line-modal,va-official-gov-banner,va-card,va-link,va-checkbox,va-select,va-text-input,va-modal,va-telephone';

// Web components that use the :before psuedo element for styling - listed so we
// don't interfere
const USES_BEFORE = new Set([
	'va-modal',
	'va-process-list-item',
	'va-table-row',
]);

// Don't inject missing web component css into web components these web
// components
const WC_NO_INJECT = new Set([
	'va-additional-info',
	'va-button',
	'va-checkbox',
	'va-number-input',
	'va-radio',
	'va-search-input',
	'va-telephone',
	'va-text-input',
]);
