/* global COLORS, add */
/* exported buildOtherCss */

/* eslint-disable-next-line no-unused-vars */
const buildOtherCss = () => [
	// Live regions
	add('[role="alert"]', 'role=alert', COLORS.ARIA, true),
	add('[role="log"]', 'role=log', COLORS.ARIA),
	add('[role="marquee"]', 'role=marquee', COLORS.ARIA),
	add('[role="status"]', 'role=status', COLORS.ARIA),
	add('[role="timer"]', 'role=timer', COLORS.ARIA),

	// Disable ARIA
	add('[role="presentation"]', 'role=presentation', COLORS.ARIA, true),
	add('[role="none"]', 'role=none', COLORS.ARIA, true),
].flat();
