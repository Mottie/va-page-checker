const defaultPreferences = {
	a11y: true,
	datadog: true,
	disabled: false,
	enabled: true,
	missing: true,
	version: true,
};

// Get & setup previous or default preferences
const currentPreferences = await chrome.storage.sync.get('options');
const savedPreferences = Object.keys(currentPreferences).length
	? currentPreferences
	: defaultPreferences;

Object.keys(savedPreferences.options).forEach(id => {
	document.getElementById(id).checked = savedPreferences.options[id];
});

const getValues = () =>
	[...document.querySelectorAll('input')]
		.reduce((result, { id, checked }) => ({
			...result,
			[id]: checked,
		}), {});

// Handle preferences change
const updatePreferences = async prefs => {
	const options = prefs?.options || getValues();

	// Save new preferences
	chrome.storage.sync.set({ options });

	// Send new preferences to page (content.js)
	const [tab] = await chrome.tabs.query({
		active: true,
		lastFocusedWindow: true,
	});
	chrome.tabs.sendMessage(tab.id, options);
};

// Watch for changes in the popup
document.querySelector('form').addEventListener('click', () => {
	updatePreferences();
});

// Update the page (content.js) when preferences change
chrome.storage.onChanged.addListener(changes => {
	updatePreferences({ options: changes.options.newValue });
});
