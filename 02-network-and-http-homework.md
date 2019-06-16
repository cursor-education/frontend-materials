---
title: Network & HTTP Homework
---

# Network & HTTP Homework

## Advanced homework

1. Explain, how domain
   [frontend-materials.cursor.education](https://frontend-materials.cursor.education)
   is showing the same content, as on
   https://github.com/cursor-education/frontend-materials/.
1. Using [www.postman-echo.com](https://www.postman-echo.com/) play with **Cookies**
   - **expected results**: http packagies with request/response
1. Using [www.postman-echo.com](https://www.postman-echo.com/) and telnet (or any extension for manual http request built & send) play with **Digest Auth**
   - **expected results**: http packagies with request/response
1. Read about **Session Cookies**
   - **expected results**: why do we need them? where they're stored? describe the idea.
1. Find **multiple CDNs**, and **using TraceRoute, Ping and other commands** - analyze and compare them
   - **expected results**: any differents between choosen CDNs
1. Play with **Fiddler**
   - try to sniff the HTTPS requests
   - **expected results**: any screenshots with tool functionality

## Simple homework

1. Play with Chrome Developers Toolkit *(DevTools)*, and "Network" tab
   - choose **at least 5 websites** (any)
   - open each of them one by one
   - view & analyze list of requests & responses *(that your browser made)*
      - analyze the GET request/response packagies *(the homework should include the whole package text including request-line and headers)*
      - explain each of headers line *(what "User-Agent" means? what "Accept" means? what does other means?)*
   - **Expected result**
      - the list of websites, with request and response *(including the status-line & headers)* of each of them
      - the list of headers *(from above requests/responses)* with descriptions of each (you need to google & find the purpose of each)
1. What are differences between HTTP version 1.0 and 1.1?
   - navigate your browser to websites what you're frequently use *(the company's website, some social networks, etc)*
   - **Expected result**
      - list of differences between 1.0 and 1.1
      - answer to question - how to pass user-data via GET? via POST? what is the diff?
      - few samples of websites (and cases) where POST method is used
1. Use actions on "Network" tab
   - try to use a "search" & "filter" fields/actions
   - use ordering by columns, sorting, etc
   - **Result**: describe what feature have you used, and how you can use it in future
1. Using the Postman
   - create a GET request to any website
   - analyze the response
   - **Expected result**
      - the HTTP request & response (including request-line / status-line & headers)
      - description of each header line on response
1. Using the Postman
   - the same as above task, but you need to create the "**HEAD**" requests
   - what is the different with GET request?
   - **Expected result**
      - the HTTP request & response (including request-line / status-line & headers)
      - the answer to question about differences between HEAD and GET methods
1. Find and show few *(at least 5)* resources, where POST method is used
   - list the URLs of resources
   - explain how did you detect that POST method was used?
   - what response was returned after request has been sent?
   - **Expected result**
      - list with websites & description where POST is used there
      - answer to question why the POST is used there
1. Using the [Postman](https://www.getpostman.com/) extension
   - set it up, if not installed yet
   - send 5 any requests (including HEAD, GET & POST) to any website
   - **Expected result**
      - screenshot with request & response from Postman
1. Find any free hosting that provides FTP access
   - google "ftp free hosting", or "free hosting", etc
   - proceed registration, confirmation & get your ftp access credentials (host/port, login, password)
   - using any ftp client, deploy any static files (html, any images, etc)
   - provide an url *(http link)* that navigates to uploaded file
   - **Expected result**
      - direct url into uploaded file

_The homework should be uploaded to Google Docs (enable sharing to everyone, make the document public)._

## Hometask notes
1. The correct (!) example of HTTP request & response *(below listed example for http://google.ua/)*

    - request:
    ```
    GET / HTTP/1.1
    Host: google.ua (імя домену)
    Connection: keep-alive
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36 
    Accept-Encoding: gzip, deflate, sdch
    Accept-Language: en-US,en;q=0.8,uk;q=0.6,uk;q=0.4
    ```

    - response
    ```
    HTTP/1.1 302 Found
    Server: nginx
    Date: Fri, 18 Mar 2016 15:20:04 GMT
    Content-Length: 0
    Connection: keep-alive
    Cache-Control: no-cache,no-store,max-age=0,must-revalidate
    Location: https://google.ua/
    Expires: Fri, 18 Mar 2016 15:20:04 GMT
    Last-Modified: Fri, 18 Mar 2016 15:20:04 GMT
    P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
    ```

1. Example of POST request
   - the http://pastebin.com/
   - put anything to "New Paste", and click on "Submit" button
   - the POST method will be sent to http://pastebin.com/post.php
   - server respond with "302 Moved Temporarily", and will redirect to another url
   - where the pasted text is located (for instance, "location: /w8jzrkBF").