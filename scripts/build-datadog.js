/* global COLORS, add */
/* exported buildDataDogCss */

/* eslint-disable-next-line no-unused-vars */
const buildDataDogCss = () => [
	add({ selector: '.dd-privacy-hidden', message: 'DataDog Hidden', color: COLORS.DATADOG }),
	add({ selector: '[data-dd-privacy="hidden"]', message: 'DataDog Hidden', color: COLORS.DATADOG }),
	add({ selector: '.dd-privacy-mask', message: 'DataDog Mask', color: COLORS.DATADOG }),
	add({ selector: '[data-dd-privacy="mask"]', message: 'DataDog Mask', color: COLORS.DATADOG }),

	/* eslint-disable quotes */
	add({
		selector: '.dd-privacy-mask[data-dd-action-name]',
		message: `DataDog Mask + \\a" attr(data-dd-action-name) "\\a action name`,
		color: COLORS.DATADOG,
		escapeQuotes: false,
	}),
	add({
		selector: '[data-dd-privacy="hidden"][data-dd-action-name]',
		message: `DataDog Mask + \\a" attr(data-dd-action-name) "\\a action name`,
		color: COLORS.DATADOG,
		escapeQuotes: false,
	}),
	add({
		selector: '.dd-privacy-hidden[data-dd-action-name]',
		message: `DataDog Hidden + \\a" attr(data-dd-action-name) "\\a action name`,
		color: COLORS.DATADOG,
		escapeQuotes: false,
	}),
	add({
		selector: '[data-dd-privacy="mask"][data-dd-action-name]',
		message: `DataDog Hidden + \\a" attr(data-dd-action-name) "\\a action name`,
		color: COLORS.DATADOG,
		escapeQuotes: false,
	}),
].flat();
