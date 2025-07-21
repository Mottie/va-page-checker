/* global COLORS, add */
/* exported buildLandmarkCss */

// Build landmarks CSS
/* eslint-disable-next-line no-unused-vars */
const buildLandmarkCss = () => [
  add({
    selector: 'article[role="article"]',
    message: 'article & role=article',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'aside[role="complementary"]',
    message: 'aside & role=complementary',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'footer[role="contentinfo"]',
    message: 'footer & role=contentinfo',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'form[role="form"]',
    message: '<form> & role=form',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'header[role="banner"]',
    message: '<header> & role=banner',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'main[role="main"]',
    message: '<main> & role=main',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'nav[role="navigation"]',
    message: '<nav> & role=navigation',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'search[role="search"]',
    message: '<search> & role=search',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'section[role="region"]',
    message: '<section> & role=region',
    color: COLORS.LANDMARKS,
  }),

  add({
    selector: 'article:not([role="article"])',
    message: '<article>',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'aside:not([role="complementary"])',
    message: '<aside>',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'footer:not([role="contentinfo"])',
    message: '<footer>',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'form:not([role="form"])',
    message: '<form>',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'header:not([role="banner"])',
    message: '<header>',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'main:not([role="main"])',
    message: '<main>',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'nav:not([role="navigation"])',
    message: '<nav>',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'search:not([role="search"])',
    message: '<search>',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: 'section:not([role="region"])',
    message: '<section>',
    color: COLORS.LANDMARKS,
  }),

  add({
    selector: '[role="application"]',
    message: 'role=application',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="article"]:not(article)',
    message: 'role=article',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="complementary"]:not(aside)',
    message: 'role=complementary',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="contentinfo"]:not(footer)',
    message: 'role=contentinfo',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="form"]:not(form)',
    message: 'role=form',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="banner"]:not(header)',
    message: 'role=banner',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="main"]:not(main)',
    message: 'role=main',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="navigation"]:not(nav)',
    message: 'role=navigation',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="search"]:not(search)',
    message: 'role=search',
    color: COLORS.LANDMARKS,
  }),
  add({
    selector: '[role="region"]:not(section)',
    message: 'role=region',
    color: COLORS.LANDMARKS,
  }),
].flat();
