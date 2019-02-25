/**
 * Request animation frame utility
 * @param {function} func callback
 * @param {number} timeCallback time to init callback
 * @return {function} setTimeout
 */
export const requestAnimationUtil = (func, timeCallback) => {
  let start = null;

  if (!window.requestAnimationFrame) {
    return window.setTimeout(func, timeCallback);
  }

  /**
  * Callback requestAnimationFrame
  * @param {number} timestamp
  * @private
  */
  const visibleStep_ = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    if (progress < timeCallback) {
      window.requestAnimationFrame(visibleStep_);
    } else {
      func();
    }
  };

  window.requestAnimationFrame(visibleStep_);
};
