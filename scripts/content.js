/* global setTimeout, clearTimeout */
/* global WC_NO_INJECT, webComponentSelectors */
/* global buildA11yCss, buildDataDogCss, buildMissingCss, buildVersionCss */
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

	setTimeout(() => {
		// delay injecting styles into web components to allow them to initialize
		[...document.querySelectorAll(selectors)].forEach(wc => {
			if (!wc.shadowRoot) {
				return;
			}

			const tag = wc.tagName.toLowerCase();

			// assuming web components only have 1 adoptedStyleSheet
			wc.shadowRoot.adoptedStyleSheets[1] = sheets.version;
			wc.shadowRoot.adoptedStyleSheets[2] = sheets.a11y;
			wc.shadowRoot.adoptedStyleSheets[3] = sheets.datadog;
			if (!WC_NO_INJECT.has(tag)) {
				wc.shadowRoot.adoptedStyleSheets[4] = sheets.missing;
			}
		});
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
