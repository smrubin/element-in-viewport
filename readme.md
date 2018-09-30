## element-in-viewport

An async module that resolves when an element has entered the viewport at a certain percentage, using the Intersection Observer API.


Install:
`npm i -S element-in-viewport`

```
import elementInViewport from 'element-in-viewport';

(async () => {

    const targetElement = document.querySelector('#targetElement');

    const entry = await elementInViewport(targetElement, 0);

    alert(`Intersection in Viewport Detected at IntersectionRatio ${entry.intersectionRatio}`);

})();
```


### Example

See /example.

TODO: Live demo published via Github pages.
