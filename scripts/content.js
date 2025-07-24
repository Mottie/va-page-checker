/* global setTimeout */
/* global WC_NO_INJECT, webComponentSelectors */
/* global buildA11yCss, buildDataDogCss, buildLandmarkCss, buildImposterCss,
   buildOtherCss, buildVersionCss */
const selectors = webComponentSelectors();

const sheets = {
  a11y: new CSSStyleSheet(),
  datadog: new CSSStyleSheet(),
  landmarks: new CSSStyleSheet(),
  imposter: new CSSStyleSheet(),
  other: new CSSStyleSheet(),
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
  setDisabled('landmarks', options);
  setDisabled('imposter', options);
  setDisabled('other', options);
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
      wc.shadowRoot.adoptedStyleSheets[4] = sheets.landmarks;
      wc.shadowRoot.adoptedStyleSheets[5] = sheets.other;
      if (!WC_NO_INJECT.has(tag)) {
        wc.shadowRoot.adoptedStyleSheets[6] = sheets.imposter;
      }
    });
  }, 1500);
};

const init = () => {
  setupSheet('a11y', buildA11yCss());
  setupSheet('datadog', buildDataDogCss());
  setupSheet('landmarks', buildLandmarkCss());
  setupSheet('imposter', buildImposterCss());
  setupSheet('other', buildOtherCss());
  setupSheet('version', buildVersionCss());

  chrome.runtime.onMessage.addListener(newPreferences => {
    update(newPreferences);
  });
  update();
};

init();
