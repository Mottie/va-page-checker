/* global setTimeout, clearTimeout, console */
/* global WC_NO_INJECT, webComponentSelectors */
/* global buildA11yCss, buildDataDogCss, buildMissingCss, buildVersionCss */
let timeout;
const selectors = webComponentSelectors();

const sheets = {
	a11y: new CSSStyleSheet(),
	datadog: new CSSStyleSheet(),
	missing: new CSSStyleSheet(),
	version: new CSSStyleSheet(),
};

const setupSheet = (sheet, rules) => {
	// Enable stylesheet
	sheets[sheet].disabled = false;
	// Add rules from build code
	rules.forEach(rule => {
		sheets[sheet].insertRule(rule);
	});
};

const setDisabled = (sheet, options = {}) => {
	sheets[sheet].disabled = options?.disabled || !options?.[sheet] || false;
};

const update = options => {
	setDisabled('a11y', options);
	setDisabled('datadog', options);
	setDisabled('missing', options);
	setDisabled('version', options);

	// inject styles into current page
	document.adoptedStyleSheets = Object.values(sheets);

	clearTimeout(timeout);
	timeout = setTimeout(() => {
		console.group();
		// delay injecting styles into web component to allow them to initialize
		[...document.querySelectorAll(selectors)].forEach(wc => {
			if (!wc.shadowRoot) {
				return;
			}

			const tag = wc.tagName.toLowerCase();
			console.log(`injecting styles into ${tag}`);

			// assuming web components only have 1 adoptedStyleSheet
			wc.shadowRoot.adoptedStyleSheets[1] = sheets.version;
			if (!WC_NO_INJECT.has(tag)) {
				wc.shadowRoot.adoptedStyleSheets[2] = sheets.missing;
			}
		});
		console.groupEnd();
	}, 1500);
};

const init = () => {
	setupSheet('a11y', buildA11yCss());
	setupSheet('datadog', buildDataDogCss());
	setupSheet('missing', buildMissingCss());
	setupSheet('version', buildVersionCss());

	chrome.runtime.onMessage.addListener(newPreferences => {
		update(newPreferences);
	});
	update();
};

init();
