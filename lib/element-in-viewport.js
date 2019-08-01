"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _intersectionObserver = _interopRequireDefault(
  require("intersection-observer")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @param targetElement - The element to watch for entry into the viewport
 * @param threshold - The threshold at which to trigger the Intersection event. Must be between 0 and 1. 0 indicates first pixel in viewport. 1 indicates every pixel of element in viewport.
 * @returns {Promise<IntersectionObserverEntry>}
 */
var _default = function _default(targetElement) {
  var threshold =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return new Promise(function(resolve, reject) {
    if (!targetElement) {
      throw new Error("Must specify a target element.");
    }

    if (!isThresholdValid(threshold)) {
      throw new Error("Threshold must be between 0 and 1 inclusive.");
    }

    if (!window.IntersectionObserver) {
      window.IntersectionObserver = _intersectionObserver["default"];
    }

    var options = {
      root: null,
      // Document viewport
      rootMargin: "0px",
      threshold: threshold // Visible amount of item shown in relation to root. 1.0 dictates that every pixel of element is visible.
    };
    var observer = new _intersectionObserver["default"](function(
      entries,
      observer
    ) {
      /**
       * When the IntersectionObserver is instantiated the callback is ran once
       * as a detection for whether the element is in view or not
       * and if its intersection ratio exceeds the given threshold.
       */
      if (
        !entries[0].isIntersecting ||
        entries[0].intersectionRatio < threshold
      ) {
        return;
      }

      observer.disconnect();
      return resolve(entries[0]);
    },
    options);
    observer.observe(targetElement);
  });
};

exports["default"] = _default;

var isThresholdValid = function isThresholdValid(threshold) {
  return Number(threshold) === threshold && threshold >= 0 && threshold <= 1;
};
