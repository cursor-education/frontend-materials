---
title: AJAX
---

# Ajax

## JSON

JavaScript Object Notation

_Task: Create JavaScript Object document that described your favorite book_

Sample: `{"name": "Roman"}`

https://jsoneditoronline.org/

_Task: Write JSON document that described your favorite book_

`JSON.parse()` – https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

`JSON.stringify()` – https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

Random JSON generator: https://www.json-generator.com/, https://next.json-generator.com/

_Task2: Write JSON document that describes list of artists_

## AJAX

Asynchronous Javascript And Xml

_Task: Where AJAX can be used?_
_Answers: Google search, Lazy page loading_

## HTTP Request & Response

https://pipedream.com/ & http://requestbin.com

https://docs.postman-echo.com/

HTTP Methods?
- GET
- POST
- HEAD vs GET
- OPTIONS
- OPTIONS vs HEAD

HTTP Headers?
- Referer
- Accept
- Accept-Encoding
- Cache-Control
- Content-Type

## XMLHttpRequest

XHR

```
var xhr = new XMLHttpRequest();
var url = "https://www.quackit.com/json/tutorial/artists.txt";

xhr.onreadystatechange = function() {

  if (xhr.readyState == 4 && xhr.status == 200) { 
    var jsonData = JSON.parse(xhr.responseText);
    showArtists(jsonData);
  }
};

xhr.open("GET", url, true);
xhr.send();

function showArtists(data) {
   // ...
}
```

`xhr.open(method, URL, async, user, password)`

`xhr.send([body])`

`xhr.abort()`

`readystatechange` - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

`xhr.setRequestHeader('Content-Type', 'application/json');`

`xhr.timeout = 30000; xhr.ontimeout = function() { }`

## Fetch API

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

`let promise = fetch(url[, options]);`

https://developers.google.com/web/updates/2015/03/introduction-to-fetch

## Open APIs

https://www.reddit.com/r/funny.json

https://rapidapi.com/collection/list-of-free-apis

https://github.com/toddmotto/public-apis

https://any-api.com/

## CORS

Cross-Origin Resource Sharing

https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flowchart_showing_Simple_and_Preflight_XHR.svg/1024px-Flowchart_showing_Simple_and_Preflight_XHR.svg.png)

## REST API

## HTTP Headers

## HTTP Authorization

## HTTP Cookies

## localStorage
