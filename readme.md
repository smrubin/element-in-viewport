## element-in-viewport

[![npm](https://img.shields.io/npm/v/element-in-viewport.svg)](https://www.npmjs.com/package/element-in-viewport)
[![Build Status](https://travis-ci.com/smrubin/element-in-viewport.svg?branch=master)](https://travis-ci.com/smrubin/element-in-viewport)
[![GitHub license](https://img.shields.io/github/license/smrubin/element-in-viewport.svg)](https://github.com/smrubin/element-in-viewport/blob/master/LICENSE)

An async module that resolves when an element has entered the viewport at a certain percentage, using the Intersection Observer API.

Polyfilled with the [Intersection Observer Polyfill](https://www.npmjs.com/package/intersection-observer)

With the polyfill, `IntersectionObserver` has been tested and known to work in the following browsers:

<table>
  <tr>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/chrome/chrome_48x48.png" alt="Chrome"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/firefox/firefox_48x48.png" alt="Firefox"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/safari/safari_48x48.png" alt="Safari"><br>
      6+
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/edge/edge_48x48.png" alt="Edge"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png" alt="Internet Explorer"><br>
      7+
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/opera/opera_48x48.png" alt="Opera"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/android/android_48x48.png" alt="Android"><br>
      4.4+
    </td>
  </tr>
</table>

#### Install:

```
npm i -S element-in-viewport
```

#### Example Usage:

```
import elementInViewport from 'element-in-viewport';

(async () => {

    const targetElement = document.querySelector('#targetElement');

    const entry = await elementInViewport(targetElement, 0);

    alert(`Intersection in Viewport Detected at IntersectionRatio ${entry.intersectionRatio}`);

})();
```
