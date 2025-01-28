/* global COLORS, add */
/* exported buildDataDogCss */

/* eslint-disable-next-line no-unused-vars */
const buildDataDogCss = () => [
	add('.dd-privacy-hidden', 'DataDog Hidden', COLORS.DATADOG),
	add('[data-dd-privacy="hidden"]', 'DataDog Hidden', COLORS.DATADOG),
	add('.dd-privacy-mask', 'DataDog Mask', COLORS.DATADOG),
	add('[data-dd-privacy="mask"]', 'DataDog Mask', COLORS.DATADOG),
	add(
		'.dd-privacy-mask[data-dd-action-name]',
		' DataDog Mask + " attr(data-dd-action-name) " action name',
		COLORS.DATADOG,
	),
	add(
		'[data-dd-privacy="hidden"][data-dd-action-name]',
		' DataDog Mask + " attr(data-dd-action-name) " action name',
		COLORS.DATADOG,
	),
	add(
		'.dd-privacy-hidden[data-dd-action-name]',
		' DataDog Hidden + " attr(data-dd-action-name) " action name',
		COLORS.DATADOG,
	),
	add(
		'[data-dd-privacy="mask"][data-dd-action-name]',
		' DataDog Hidden + " attr(data-dd-action-name) " action name',
		COLORS.DATADOG,
	),
].flat();
