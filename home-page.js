var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://npeats-db5d.restdb.io/rest/credit",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "<your CORS apikey here>",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });