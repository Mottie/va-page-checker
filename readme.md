# VA page checker

<!-- [link-rgh]: https://github.com/sindresorhus/refined-github
[link-ngh]: https://github.com/sindresorhus/notifier-for-github
[link-hfog]: https://github.com/sindresorhus/hide-files-on-github
[link-tsconfig]: https://github.com/sindresorhus/tsconfig
[link-options-sync]: https://github.com/fregante/webext-options-sync
[link-cws-keys]: https://github.com/fregante/chrome-webstore-upload-keys
[link-amo-keys]: https://addons.mozilla.org/en-US/developers/addon/api/key -->

> Highlight web components, accessibility issues, and other issues on VA.gov pages

<img width="500" alt="page showing an orange outlined va-telephone component and a dark red outlines telephone link" src="media/example.png" />

## Features

Highlights
- VA design system web components:
  - orange highlight on USWDS v3 components
  - dark red highlight on USWDS v1 components

- Dark red highlights on elements that _should_ be web components:
  - Div modal -> `va-modal`
  - Plain button -> `va-button`
  - Plain checkbox -> `va-checkbox`
  - Plain number input -> `va-number-input`
  - Plain radio input -> `va-radio-option`
  - Plain search input -> `va-search-input`
  - Plain select -> `va-select`
  - Plain telephone link -> `va-telephone`
  - Plain text input -> `va-text-input`
  - Plain textarea -> `va-textarea`

- Issues (rules copied from [Smashing magazine "Apps For All" by Heydon Pickering](https://www.smashingmagazine.com/ebooks/apps-for-all-coding-accessible-web-applications/)):
  - buttons missing a `type`
  - disabled elements
  - links (`a`) missing an `href`
  - links (`a`) that are empty and missing an `aria-label` and `aria-labelledby`
  - buttons that are empty and missing an `aria-label` and `aria-labelledby`
  - images missing `alt` content
  - sections nested within sections
  - elements with a `role="status"` without an `aria-live="polite"`
  - elements with a `role="alert"` without an `aria-live="assertive"`
  - elements with a `aria-live="polite"` without a `role="status"`
  - elements with a `aria-live="assertive"` without a `role="alert"`

- Extra issues
  - links (`a`) with `target="_blank"` missing `ref="noreferrer noopener"`
  - links (`a`) going outside of VA.gov domain missing `ref="noreferrer noopener"`

Hover over the highlighted outline to reveal the component

### Run locally

1. Download the zip or clone the repo `git clone https://github.com/Mottie/va-page-checker`
2. Open browser's extension page `chrome://extension` (for Chrome)
3. Enable "Developer mode"
4. Use "Load unpacked" button
5. Target the `va-page-checker` folder
6. Pin the "VA page checker" icon and toggle the button to highlight content

<!--
## Getting started

### 1️⃣ Create your own copy

1. Click [<kbd>Use this template</kbd>](https://github.com/fregante/browser-extension-template/generate) to make a copy of your own. 😉

Note: When you create a repository from the template, the [Template Cleanup](.github/workflows/template-cleanup.yml) workflow will be triggered to delete and edit template-specific resources. Wait a moment until the workflow finishes (you will see a commit pushed with 'Template cleanup' message).

### 🛠 Build locally

1. Checkout the copied repository to your local machine eg. with `git clone https://github.com/my-username/my-awesome-extension/`
1. Run `npm install` to install all required dependencies
1. Run `npm run build`

The build step will create the `distribution` folder, this folder will contain the generated extension.

### 🏃 Run the extension

Using [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) is recommended for automatic reloading and running in a dedicated browser instance. Alternatively you can load the extension manually (see below).

1. Run `npm run watch` to watch for file changes and build continuously
1. Run `npm install --global web-ext` (only only for the first time)
1. In another terminal, run `web-ext run -t chromium`
1. Check that the extension is loaded by opening the extension options ([in Firefox](media/extension_options_firefox.png) or [in Chrome](media/extension_options_chrome.png)).

#### Manually

You can also [load the extension manually in Chrome](https://www.smashingmagazine.com/2017/04/browser-extension-edge-chrome-firefox-opera-brave-vivaldi/#google-chrome-opera-vivaldi) or [Firefox](https://www.smashingmagazine.com/2017/04/browser-extension-edge-chrome-firefox-opera-brave-vivaldi/#mozilla-firefox).

### ✏️ Make the first change

1. For example, edit source\manifest.json to `"name": "My Awesome Extension",`
1. Go back to your browser, reload and see the change take effect

Note: Firefox will automatically reload content scripts when the extension is updated, Chrome requires you to reload the page to reload the content scripts.

### 📕 Read the documentation

Here are some websites you should refer to:

- [Parcel’s Web Extension transformer documentation](https://parceljs.org/recipes/web-extension/)
- [Chrome extensions’ API list](https://developer.chrome.com/docs/extensions/reference/)
- A lot more links in my [Awesome WebExtensions](https://github.com/fregante/Awesome-WebExtensions) list

## Configuration

The extension doesn't target any specific ECMAScript environment or provide any transpiling by default. The extensions output will be the same ECMAScript you write. This allows us to always target the latest browser version, which is a good practice you should be following.

### Parcel 2

Being based on Parcel 2 and its [WebExtension transformer](https://parceljs.org/recipes/web-extension/), you get all the good parts:

- Browserlist-based code transpiling (which defaults to just the latest Chrome and Firefox versions)
- Automatically picks up any new file specified in `manifest.json`

### Auto-syncing options

Options are managed by [fregante/webext-options-sync][link-options-sync], which auto-saves and auto-restores the options form, applies defaults and runs migrations.

### Publishing

It's possible to automatically publish to both the Chrome Web Store and Mozilla Addons at once by adding these secrets on GitHub Actions:

1. `CLIENT_ID`, `CLIENT_SECRET`, and `REFRESH_TOKEN` from [Google APIs][link-cws-keys].
2. `WEB_EXT_API_KEY`, and `WEB_EXT_API_SECRET` from [AMO][link-amo-keys].

Also include `EXTENSION_ID` in the secrets ([how to find it](https://stackoverflow.com/a/8946415/288906)) and add Mozilla’s [`gecko.id`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) to `manifest.json`.

The GitHub Actions workflow will:

1. Build the extension
2. Create a version number based on the current UTC date time, like [`19.6.16`](https://github.com/fregante/daily-version-action) and sets it in the manifest.json
3. Deploy it to both stores

#### Auto-publishing

Thanks to the included [GitHub Action Workflows](.github/workflows), if you set up those secrets in the repo's Settings, the deployment will automatically happen:

- on a schedule, by default [every week](.github/workflows/release.yml) (but only if there are any new commits in the last tag)
- manually, by clicking ["Run workflow"](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/) in the Actions tab.

## Credits

Extension icon made by [Freepik](https://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0).

## Extensions created using this template

- [notlmn/copy-as-markdown](https://github.com/notlmn/copy-as-markdown) - Browser extension to copy hyperlinks, images, and selected text as Markdown.

-->

## License

This browser extension is released under [CC0](#license).

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
