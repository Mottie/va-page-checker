// Modified from MDN apply-css example for manifest v3
// https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js
const TITLE_APPLY = 'Apply VA page checker CSS';
const TITLE_REMOVE = 'Remove VA page checker CSS';
const APPLICABLE_PROTOCOLS = new Set(['https:']);

/*
Toggle CSS: based on the current title, insert or remove the CSS.
Update the page action's title and icon to reflect its state.
*/
function toggleCSS(tab) {
	const tabId = tab.id;
	function gotTitle(title) {
		if (title === TITLE_APPLY) {
			chrome.action.setIcon({ tabId, path: 'octo-on.png' });
			chrome.action.setTitle({ tabId, title: TITLE_REMOVE });

			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				func: () => {
					document?.body.classList.add('va-checked-enabled');
					update();
				},
			});
		} else {
			chrome.action.setIcon({ tabId, path: 'octo-off.png' });
			chrome.action.setTitle({ tabId, title: TITLE_APPLY });

			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				func: () => {
					document?.body.classList.remove('va-checked-enabled');
					update();
				},
			});
		}
	}

	const gettingTitle = chrome.action.getTitle({ tabId });
	gettingTitle.then(gotTitle);
}

/*
Returns true only if the URL's protocol is in APPLICABLE_PROTOCOLS.
Argument url must be a valid URL string.
*/
function protocolIsApplicable(url) {
	const protocol = (new URL(url)).protocol;
	return APPLICABLE_PROTOCOLS.has(protocol);
}

/*
Initialize the page action: set icon and title, then show.
Only operates on tabs whose URL's protocol is applicable.
*/
function initializePageAction(tab) {
	const tabId = tab.id;
	if (protocolIsApplicable(tab.url)) {
		chrome.action.setIcon({ tabId, path: 'octo-off.png' });
		chrome.action.setTitle({ tabId, title: TITLE_APPLY });
	}
}

/*
When first loaded, initialize the page action for all tabs.
*/
const gettingAllTabs = chrome.tabs.query({});
gettingAllTabs.then((tabs) => {
	for (let tab of tabs) {
		initializePageAction(tab);
	}
});

/*
Each time a tab is updated, reset the page action for that tab.
*/
chrome.tabs.onUpdated.addListener((id, changeInfo, tab) => {
	initializePageAction(tab);
});

/*
Toggle CSS when the page action is clicked.
*/
chrome.action.onClicked.addListener(toggleCSS);
