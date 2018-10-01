import elementInViewport from '../lib/element-in-viewport.js';

(async () => {

    const targetElement = document.querySelector('#targetElement');

    try {
        const entry = await elementInViewport(targetElement, 0);
        alert(`Intersection in Viewport Detected at IntersectionRatio ${entry.intersectionRatio}`);
    } catch(err) {
        console.log(err);
    }

})();
