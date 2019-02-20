const makeRequest = (method, url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open(method, url);
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        resolve(request.response);
      } else {
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    };
    request.onerror = () => {
      reject({
        status: request.status,
        statusText: request.statusText
      });
    };
    request.send();
  });
};

makeRequest('GET', 'https://api.github.com/users/diegofelipemoreno/repos').then((datums) => {
  console.log(datums);
}).catch((err) => {
  console.error('Augh, there was an error!', err.statusText);
});