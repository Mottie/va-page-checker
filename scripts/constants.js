/* eslint-disable no-unused-vars */
/* global COLORS, DEFAULT_SELECTORS, LAYOUT, USES_BEFORE, WC_NO_INJECT */
/* exported COLORS, DEFAULT_SELECTORS, LAYOUT, USES_BEFORE, WC_NO_INJECT */
const COLORS = {
	A11Y: '#706100',
	ARIA: '#BB5008',
	DATADOG: '#5D185B',
	ERROR: '#5D1818',
	LANDMARKS: '#222222',
	USWDS: '#205D18',
};
const LAYOUT = [
	'position: absolute',
	'left: 0',
	'top: 0',
	'z-index: 1',
	'opacity: 85%',
	'padding: 0 3px',
	'color: #fff',
	'font-size: 12px',
	'line-height: 13px',
	'text-align: left',
].join('; ');

// Current list as of July 2025; only used as a fallback
const DEFAULT_SELECTORS = 'va-accordion,va-accordion-item,va-additional-info,va-alert,va-alert-expandable,va-alert-sign-in,va-back-to-top,va-banner,va-breadcrumbs,va-button,va-button-icon,va-button-pair,va-button-segmented,va-card,va-checkbox,va-checkbox-group,va-combo-box,va-crisis-line-modal,va-critical-action,va-date,va-file-input,va-file-input-multiple,va-header-minimal,va-icon,va-language-toggle,va-link,va-link-action,va-loading-indicator,va-maintenance-banner,va-memorable-date,va-minimal-footer,va-modal,va-need-help,va-notification,va-official-gov-banner,va-omb-info,va-on-this-page,va-pagination,va-privacy-agreement,va-process-list,va-process-list-item,va-progress-bar,va-promo-banner,va-radio,va-radio-option,va-search-filter,va-search-input,va-segmented-progress-bar,va-select,va-service-list-item,va-statement-of-truth,va-summary-box,va-table,va-table-inner,va-table-row,va-telephone,va-telephone-input,va-text-input,va-textarea';

// Web components that use the :before psuedo element for styling - listed so we
// don't interfere
const USES_BEFORE = new Set([
	'va-link',
	'va-modal',
	'va-process-list-item',
	'va-table-row',
]);

// Don't inject missing web component css into web components these web
// components
const WC_NO_INJECT = new Set([
	'va-accordion-item',
	'va-accordion',
	'va-additional-info',
	'va-breadcrumbs',
	'va-button-icon',
	'va-button',
	'va-checkbox',
	'va-link-action',
	'va-link',
	'va-modal',
	'va-number-input',
	'va-radio',
	'va-search-input',
	'va-select',
	'va-telephone-input',
	'va-telephone',
	'va-text-input',
	'va-textarea',
]);
