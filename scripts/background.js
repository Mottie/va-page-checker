let statusLoading = false;

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
	const { url = '', status = '' } = changeInfo;
	// changeInfo status complete state does not include a url
	if (
		url.includes('va.gov') ||
		url.includes('localhost:3001') ||
		statusLoading
	) {
		statusLoading = true;
		if (status === 'complete') {
			statusLoading = false;
			const currentPreferences = await chrome.storage.sync.get('options');
			chrome.tabs.sendMessage(tabId, currentPreferences.options);
		}
	}
});
