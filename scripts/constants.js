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

// Current list as of May 2024; only used as a fallback
const DEFAULT_SELECTORS = 'va-accordion,va-accordion-item,va-additional-info,va-alert,va-alert-expandable,va-back-to-top,va-banner,va-breadcrumbs,va-button,va-button-icon,va-button-pair,va-card,va-checkbox,va-checkbox-group,va-crisis-line-modal,va-date,va-file-input,va-header-minimal,va-icon,va-link,va-loading-indicator,va-maintenance-banner,va-memorable-date,va-minimal-footer,va-modal,va-need-help,va-notification,va-number-input,va-official-gov-banner,va-omb-info,va-on-this-page,va-pagination,va-privacy-agreement,va-process-list,va-process-list-item,va-progress-bar,va-promo-banner,va-radio,va-radio-option,va-search-input,va-segmented-progress-bar,va-select,va-statement-of-truth,va-summary-box,va-table,va-table-inner,va-table-row,va-telephone,va-text-input,va-textarea';

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
