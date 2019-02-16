---
title: Network & HTTP Протокол
---

# Network & HTTP Протокол

![](https://i.kinja-img.com/gawker-media/image/upload/s--ynQJhtoH--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/18rq5f0zk1nhqjpg.jpg)

## Для чого це мені потрібно зараз (на позиції Junior/Intern)?

Варіанти?

Check-list запитань:

* How internet layers works?
* What is IP and differences between IPv4/IPv6?
* When the TCP & UDP uses?
* What is DNS responsible for?
* What are differences between GET/POST methods?
* How to authorize user through the HTTP?
* How real-time applications works?
* How to use "Network" tag in Google DevTools.

## Всесвітня мережа (WWW)

![](https://www.electronicproducts.com/uploadedImages/Interconnections/Wire_and_Cable/1(3).jpg)

_^ Advanced Research Projects Agency_

![](https://www.electronicproducts.com/uploadedImages/Interconnections/Wire_and_Cable/9.gif)

_^ 2000, The Internet spreads like wildfire. Internet is using by 40% of the entire human population_

**Наша задача:** зрозуміти, як контактують точка А із точкою Б, у різних кінцях світу.

![](/assets/images/network-and-http/iot.png)

_^ Evolution of Internet of Things_

## Чому мені (frontend розробнику) це потрібно знати?

![](/assets/images/network-and-http/frontend-career-path.png)

## Що таке Server?

Сервером може бути любий пристрій, типу комп'ютера, ноутбука, телефона, тощо, який готовий приймати і виконувати запити ззовні.

![](http://www.pclaptopspal.com/assets/computers_-_Copy.jpg)

Серверна:

![](https://i.pinimg.com/564x/99/89/1b/99891b8afa9b64940f8375c07e01a170.jpg?b=t)

Сервер Lenovo x3650:

![](https://serverental.com/wp-content/uploads/2017/07/Lenovo-x3650-M5-Intel-Xeon-E5-2620-v4-Server-for-sale.jpg)

Перший WWW сервер (прочитайте лейбл на ньому):

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/First-server-cern-computer-center.jpg/1600px-First-server-cern-computer-center.jpg)

## Як вони між собою спілкуються?

Client-Server Communication:

![](https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-request-response.png)

Request-Response model _(request-reply)_:

![](https://s3.amazonaws.com/one-month-rails-production/assets/images/000/000/075/original/image01.png?1412885329)

Команда `ping`:

![](/assets/images/network-and-http/request-response-sample.png)

## Що таке Протокол?

![](https://www.royal.uk/sites/default/files/images/feature/bday.jpg)

> First thing you need to know and understand is that HTTP is a protocol. That would be the P character in the acronym. What is a protocol good for? Many, many years ago one teacher tried to explain a protocol this way and I cannot think of any better way.
> 
> If you are going to visit the Queen of England (or any other of those blue blooded people) you are confronted with a list of things you are allowed to do and things you should not do under any circumstances. This list is called the royal protocol. There are also protocols in diplomacy. Other terms in this regard are Etiquette, Manners or Conventions.
> 
> Protocols in the computer world are certainly nothing like etiquette but more or less like the manners how computer components interact with each other. Convention is probably the most fitting term other than protocol.

Прокол Нової Пошти:

![](https://pp.vk.me/c408218/v408218522/74a6/kUSar9bW6b8.jpg)

## Які протоколи існують?

TCP, UDP, SOAP, IP, DNS, HTTP, POP3, SMTP, FTP, NTP, IRC, etc.

[https://en.wikipedia.org/wiki/Lists_of_network_protocols](https://en.wikipedia.org/wiki/Lists_of_network_protocols)

[https://www.w3.org/Protocols/](https://www.w3.org/Protocols/)

Telegram MTProto - [https://core.telegram.org/mtproto](https://core.telegram.org/mtproto).

## Як передаються дані?

...або Багатошарова архітектура (Layered architecture).

_pen:_

![](https://images-na.ssl-images-amazon.com/images/I/51X9oIx70kL._SX425_.jpg)

_The pen in box:_

![](http://proline.biz.ua/images/groove-a-5-hpn-box-pack-1024x680.jpg)

_The pen in box with declaration:_

![](https://pp.vk.me/c304214/v304214149/5537/Snx8K3thgnk.jpg)

_The pen in box with declaration is delivering to receiver:_

![](http://mmr.ua/uploaded/materials/8db0e5394f.jpg)

_The pen in box with declaration is delivered to receiver:_

![](http://media.static.fedoriv.com/uploads/2015/03/Nova_poshta_case9_1.jpg)

_The pen in box with declaration is delivered to receiver. He got it, confirmed that he is receiver and got the box:_

![](https://pbs.twimg.com/profile_images/608402882132606976/p9NIyVb4.jpg)

_The pen in box with declaration is delivered to receiver. He got it & confirmed personality, unboxed and got the pen:_

![](https://images-na.ssl-images-amazon.com/images/I/51X9oIx70kL._SX425_.jpg)

## Багатошарова архітектура у роботі WWW

Model OSI:

![](https://community.fs.com/blog/wp-content/uploads/2017/11/seven-layers-of-OSI-model.png)

TCP/IP Model:

![](http://static.thegeekstuff.com/wp-content/uploads/2011/10/tcp-ip.png)

На кожному рівні – свій набір протоколів.

Яка різниця між TCP та UDP? TCP - гарантує доставку, UDP - ні.

## Що таке IP?

IPv4 (Internet Protocol version 4).

4 294 967 296 (4 млд) унікальних адрес.

Формат – 4 десяткових числа від 0 до 255 (2^8), октети.

2011 року виділено останні п’ять блоків IP-адрес.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ipv4_address_Spanish.svg/750px-Ipv4_address_Spanish.svg.png)

Зарезервовані діапазони:
* 127.0.0.0 – Localhost/Loopback
* 0.0.0.0 – Current network
* 10.0.0.0 – Private network
* 172.16.0.0 – Private network
* 192.168.0.0 – Private network
* ...

IPv6.

`2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d`

`http://[2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d]:8080/`

`0000:0000:0000:0000:0000:0000:ae21:ad12 => ::ae21:ad12`

2006 release.

протокол IPv6 виділяє на адресу 16 байтів (раніше на інтернет-адресу виділяли 4 байти).

340 трильйонам унікальних адрес.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ipv6_address_leading_zeros.svg/1200px-Ipv6_address_leading_zeros.svg.png)

## Що таке Port?

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Server-based-network.svg/1920px-Server-based-network.svg.png)

![](https://i0.wp.com/www.dignited.com/wp-content/uploads/2018/11/laptop-ports.jpg?fit=640%2C427&ssl=1)

![](http://www.ortizonline.com/images/sockets.gif)

## Що таке DNS?

![](http://linux-training.be/networking/images/dns_01_what_is_dns.jpg)

```
~ $ host cursor.education
cursor.education has address 195.64.154.194
cursor.education mail is handled by 10 mail.cursor.education.
```

[DSN Recors types](https://simpledns.com/help/dns-record-types):

* A (Host address)
* ALIAS (Auto resolved alias)
* CNAME (Canonical name for an alias)
* MX (Mail eXchange)
* TXT (Descriptive text)

```
~ $ host -a cursor.education
Trying "cursor.education"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 43851
;; flags: qr rd ra; QUERY: 1, ANSWER: 6, AUTHORITY: 0, ADDITIONAL: 0

;; ANSWER SECTION:
cursor.education.	14399	IN	SOA	ns7.rehost.com.ua. hostmaster.redo.com.ua. 2016021502 10200 3600 1209600 86400
cursor.education.	14399	IN	NS	ns8.rehost.com.ua.
cursor.education.	14399	IN	NS	ns7.rehost.com.ua.
cursor.education.	14399	IN	A	91.194.250.152
cursor.education.	14399	IN	TXT	"v=spf1 a mx ip4:91.194.250.152 ~all"
cursor.education.	14399	IN	MX	10 mail.cursor.education.

Received 227 bytes from 8.8.8.8#53 in 128 ms
```

* [https://dnsquery.org/](https://dnsquery.org/)
* [http://ping.eu/nslookup/](http://ping.eu/nslookup/)
* [https://www.ultratools.com/tools/dnsLookup](https://www.ultratools.com/tools/dnsLookup)

`/etc/hosts`

![](http://cdn3.howtogeek.com/wp-content/uploads/2010/08/637x414xsshot20100831205149.png.pagespeed.ic.X1hUmP29Dr.png)

## URL & URN

![](https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-url-structure.png)

Relative vs Absolute URLs:
* Absolute URLs: `http://yourdomain.com/images/example.png`
* Relative URLs: `//yourdomain.com/images/example.png`
* Relative URLs: `/images/example.png`
* Relative URLs: `images/example.png`
* Relative URLs: `file.php`
* Relative URLs: `../.././../css/default.css`

## HTTP протокол

HTTP – **H**yper**T**ext **T**ransfer **P**rotocol.

![](https://i0.wp.com/blogs.innovationm.com/wp-content/uploads/2016/10/HTTP-Protocol.png?fit=624%2C248)

![](https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/images/HTTP.png)

## Яка різниця між методами GET vs POST?

![](https://s3-us-west-2.amazonaws.com/assertible/blog/swagger-petstore-endpoint-methods.png)

[https://www.tutorialspoint.com/http/http_methods.htm](https://www.tutorialspoint.com/http/http_methods.htm)

HTTP verbs (methods):
* GET – to retreive whatever information
* POST – used to send data to the server for updates, submit information to web server
* HEAD – response does not include message body, useful for getting metadata without transfering the resource
* PUT – creates the resource if it does not create
* DELETE – removes the web object
* TRACE, OPTIONS, ...

## HTTP протокол через Telnet

```
$ telnet google.com 80

GET / HTTP/1.1
Host: google.com
```

## HTTP Request

```
GET /wiki/HTTP HTTP/1.0
Host: ru.wikipedia.org
User-Agent: HTTPTool/1.0
```

## HTTP Response

```
HTTP/1.0 200 OK
Data: 123
Server: Apache/1.3.12 (Unix)
Last-Modified: (data)
Content-Type: text/html
Content-Length: (message-payload)

(message body)
```

Result code and phrase:

* 1xx: Informational - not done yet
* 2xx: Success - you win (200 OK)
* 3xx: Redirection - you lose but try again (i.e. 301 Moved Permanently, 302 Found, ...)
* 4xx: Client Error - you lose, your fault (i.e. 401 Unauthorized, 403 Forbidden, 404 Not Found, ...)
* 5xx: Server Error - you lose, my bad (i.e. 500 Internal Server Error, ...)

## HTTP headers

![](/assets/images/network-and-http/devtools-sample.png)

## Postman and DevTools

[https://www.getpostman.com/](https://www.getpostman.com/)

[https://www.postman-echo.com/](https://www.postman-echo.com/)

## HTTP in Depth (в деталях)

* Cookies
* Sessions
* Idempotent and Safe methods

## HTTP Cookies & Sessions

Cookies:

![](http://1.bp.blogspot.com/-eqm6AQyKOvA/Tr1599o-GZI/AAAAAAAABOo/W5m9t3CEek0/s1600/2.png)

Sessions:

![](https://media-www-asp.azureedge.net/media/3712645/webapi-cookies01.png)

## HTTP перенаправлення на іншу адресу (redirect)

```
HTTP/1.1 302 Found
Location: ...
```

## HTTP Authentication

![](https://i.stack.imgur.com/QnUZW.png)

![](https://chathurangat.files.wordpress.com/2017/08/blog-post-spring-security-basic-authentication-1.png?w=1108)

## HTTPS протокол

![](http://golovoladki.ru/?qa=blob&qa_blobid=10033702249303131799)

## Як завантажується сторінка?

* parsing of URL (detected HTTP protocol, and "/" resource)
* DNS request to get a IP
* open Socket connection over TCP (ip + port)
* create HTTP packet & send
* wait & get the HTTP response
* close the TCP connection
* parse & render the response body in browser

## Again, для чого це мені (програмісту) потрібно?

* AJAX requests
* RESTful API
* Real-time apps (chat, etc)
* Working with external APIs
* "Why my images is not loading, AAA!"
* etc

---

Використані матеріали:
* [http:// for dummies](http://www.adrianworlddesign.com/Knowledge-Base/Web-Standards/Things-about-Hypertext/http-for-dummies)
* [The history of the Internet explained through pictures](https://www.electronicproducts.com/Interconnections/Wire_and_Cable/The_history_of_the_Internet_explained_through_pictures.aspx)
* [The History of Early Computing Machines, from Ancient Times to 1981](https://io9.gizmodo.com/the-history-of-early-computing-machines-from-ancient-t-549202742)
* [Хекслет - HTTP](https://www.youtube.com/watch?v=E-q8b7Kc49w&t=0s)
