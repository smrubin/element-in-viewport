import elementInViewport from '../index.js';

(async () => {

    const targetElement = document.querySelector('#targetElement');

    const entry = await elementInViewport(targetElement, 0);

    alert(`Intersection in Viewport Detected at IntersectionRatio ${entry.intersectionRatio}`);

})();
