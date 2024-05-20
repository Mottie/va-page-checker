# VA page checker

> Highlight web components, accessibility issues, and other issues on VA.gov pages

<img width="500" alt="page showing the VA page checker extension popup with 4 checkboxes. The main page shows green outlines v3 web components, with some gold highlighted buttons and red highlights behind the popup" src="media/example.png" />

## Features

Highlights

- VA design system web components:

	<img width="400" alt="page showing green outlined v3 web components and one red outlined v1 web component" src="media/example-web-components.png" />

	- USWDS v3 components (green highlights)
	- USWDS v1 components (dark red highlights)

- Elements that _should_ be web components (dark red highlights):

	<img width="300" alt="page showing red outlined telephone links that should be va-telephone we components" src="media/example-missing.png" />

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

- Accessibility issues (rules copied from [Smashing magazine "Apps For All" by Heydon Pickering](https://www.smashingmagazine.com/ebooks/apps-for-all-coding-accessible-web-applications/)) (gold highlights):

	<img width="400" alt="page showing gold outlined button that is missing a button type" src="media/example-a11y.png" />

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

	- links (`a`) with `target="_blank"` missing `ref="noreferrer noopener"`
	- links (`a`) going outside of VA.gov domain missing `ref="noreferrer noopener"`

- DataDog privacy settings (purple highlights)

	<img width="400" alt="page showing purple outlined elements with datadog hidden and masked privacy classes and some with an additional action name" src="media/example-datadog.png" />
	
	- hidden privacy class or data-attribute
	- masked privacy class or data-attribute
	- action name data-attribute for hidden setting
	- action name data-attribute for masked setting

Hover over the highlighted outline to reveal the component

### Run locally

1. Download the zip or clone the repo `git clone https://github.com/Mottie/va-page-checker`
2. Open browser's extension page `chrome://extension` for Chrome, or `edge://extensions` for Edge
3. Enable "Developer mode"
4. Use "Load unpacked" button
5. Target the `va-page-checker` folder
6. Pin the "VA page checker" icon and toggle the button to highlight content

## License

This browser extension is released under [CC0](#license).

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
