var url = window.location.href;
var apiValue = url.split("?api=")[1];

const options = {
  method: 'get',
  headers: {
    'Cache-Control': 'no-cache',
    Accept: '*/*',
    'User-Agent': 'Fetch Client',
    'Accept-Encoding': 'gzip, deflate',
    Connection: 'keep-alive'
  }
};

fetch(`https://stickx.top/api-hohohubv/?hwid=${apiValue}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
