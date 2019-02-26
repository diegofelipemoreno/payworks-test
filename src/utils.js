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


/**
* Loads scss
* @param {array} arrayUrl scss
* @return {Promise}
*/
export function loadAsset(arrayUrl) {
  return Promise.all(arrayUrl.map((url) => {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      request.open('GET', url);
      request.send('');
      request.onreadystatechange = () => {
        if (request.status === 200) {
          try {
            let result = JSON.parse(request.response) || {};

            resolve(result);
          } catch (e) {
            console.warn(e);
          }
        } else {
          reject();
        }
      };
    });
  }));
}
