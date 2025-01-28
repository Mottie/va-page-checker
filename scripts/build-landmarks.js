/* global COLORS, add */
/* exported buildLandmarkCss */

// Build landmarks CSS
/* eslint-disable-next-line no-unused-vars */
const buildLandmarkCss = () => [
	add('article[role="article"]', 'article & role=article', COLORS.LANDMARKS),
	add(
		'aside[role="complementary"]',
		'aside & role=complementary',
		COLORS.LANDMARKS,
	),
	add(
		'footer[role="contentinfo"]',
		'footer & role=contentinfo',
		COLORS.LANDMARKS,
	),
	add('form[role="form"]', '<form> & role=form', COLORS.LANDMARKS),
	add('header[role="banner"]', '<header> & role=banner', COLORS.LANDMARKS),
	add('main[role="main"]', '<main> & role=main', COLORS.LANDMARKS),
	add('nav[role="navigation"]', '<nav> & role=navigation', COLORS.LANDMARKS),
	add('search[role="search"]', '<search> & role=search', COLORS.LANDMARKS),
	add('section[role="region"]', '<section> & role=region', COLORS.LANDMARKS),

	add('article:not([role="article"])', '<article>', COLORS.LANDMARKS),
	add('aside:not([role="complementary"])', '<aside>', COLORS.LANDMARKS),
	add('footer:not([role="contentinfo"])', '<footer>', COLORS.LANDMARKS),
	add('form:not([role="form"])', '<form>', COLORS.LANDMARKS),
	add('header:not([role="banner"])', '<header>', COLORS.LANDMARKS),
	add('main:not([role="main"])', '<main>', COLORS.LANDMARKS),
	add('nav:not([role="navigation"])', '<nav>', COLORS.LANDMARKS),
	add('search:not([role="search"])', '<search>', COLORS.LANDMARKS),
	add('section:not([role="region"])', '<section>', COLORS.LANDMARKS),

	add('[role="application"]', 'role=application', COLORS.LANDMARKS),
	add('[role="article"]:not(article)', 'role=article', COLORS.LANDMARKS),
	add(
		'[role="complementary"]:not(aside)',
		'role=complementary',
		COLORS.LANDMARKS,
	),
	add(
		'[role="contentinfo"]:not(footer)',
		'role=contentinfo',
		COLORS.LANDMARKS,
	),
	add('[role="form"]:not(form)', 'role=form', COLORS.LANDMARKS),
	add('[role="banner"]:not(header)', 'role=banner', COLORS.LANDMARKS),
	add('[role="main"]:not(main)', 'role=main', COLORS.LANDMARKS),
	add('[role="navigation"]:not(nav)', 'role=navigation', COLORS.LANDMARKS),
	add('[role="search"]:not(search)', 'role=search', COLORS.LANDMARKS),
	add('[role="region"]:not(section)', 'role=region', COLORS.LANDMARKS),
].flat();
