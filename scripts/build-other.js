/* global COLORS, add */
/* exported buildOtherCss */

/* eslint-disable-next-line no-unused-vars */
const buildOtherCss = () => [
	// Live regions
	add({
		selector: '[role="alert"]',
		message: 'role=alert',
		color: COLORS.ARIA,
		useAfter: true,
	}),
	add({
		selector: '[role="log"]',
		message: 'role=log',
		color: COLORS.ARIA,
	}),
	add({
		selector: '[role="marquee"]',
		message: 'role=marquee',
		color: COLORS.ARIA,
	}),
	add({
		selector: '[role="status"]',
		message: 'role=status',
		color: COLORS.ARIA,
	}),
	add({
		selector: '[role="timer"]',
		message: 'role=timer',
		color: COLORS.ARIA,
	}),

	// Disable ARIA
	add({
		selector: '[role="presentation"]',
		message: 'role=presentation',
		color: COLORS.ARIA,
		useAfter: true,
	}),
	add({
		selector: '[role="none"]',
		message: 'role=none',
		color: COLORS.ARIA,
		useAfter: true,
	}),
].flat();
