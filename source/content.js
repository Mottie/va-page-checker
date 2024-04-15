/* global: webComponentSelectors, noMissingWcCss, buildWcCss, buildMissingWcCss, buildExtraCss */
const mainSheet = new CSSStyleSheet();
const missingWcSheet = new CSSStyleSheet();
const selectors = webComponentSelectors();

function init() {
	mainSheet.disabled = false;
	missingWcSheet.disabled = false;

	[...buildWcCss(), ...buildExtraCss()].forEach(rule => {
		mainSheet.insertRule(rule);
	});

	buildMissingWcCss().forEach(rule => {
		missingWcSheet.insertRule(rule);
	});
}

async function update() {
	const enabled = document.body.classList.contains('va-checked-enabled');
	mainSheet.disabled = !enabled;
	missingWcSheet.disabled = !enabled;

	document.adoptedStyleSheets = [mainSheet, missingWcSheet];
	console.log(document.querySelectorAll(selectors));
	[...document.querySelectorAll(selectors)].forEach(wc => {
		if (!wc.shadowRoot) {
			return;
		}

		const tag = wc.tagName.toLowerCase();
		// assuming web components only have 1 adoptedStyleSheet
		wc.shadowRoot.adoptedStyleSheets[1] = mainSheet;
		if (!noMissingWcCss.has(tag)) {
			console.log('injected missing into', wc);
			wc.shadowRoot.adoptedStyleSheets[2] = missingWcSheet;
		}
	});
}

init();
