---
title: Network & HTTP Протокол
---

# Network & HTTP Протокол

![](https://i.kinja-img.com/gawker-media/image/upload/s--ynQJhtoH--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/18rq5f0zk1nhqjpg.jpg)

## Для чого це мені потрібно?

lorem ipsum

## WWW

![](https://www.electronicproducts.com/uploadedImages/Interconnections/Wire_and_Cable/1(3).jpg)

_^ Advanced Research Projects Agency_

![](https://www.electronicproducts.com/uploadedImages/Interconnections/Wire_and_Cable/9.gif)

_^ 2000, The Internet spreads like wildfire. Internet is using by 40% of the entire human population_


![](/assets/image/network-and-http/iot.png)

_^ Evolution of Internet of Things_

## Чому мені (frontend розробнику) це потрібно знати?

![](/assets/image/network-and-http/frontend-career-path.png)

## Що таке Server?

![](http://www.pclaptopspal.com/assets/computers_-_Copy.jpg)

![](https://i.pinimg.com/564x/87/1e/78/871e78f1023b02e7b2e841fea4d03f15.jpg?b=t)

![](https://i.pinimg.com/564x/69/0d/ba/690dbaab5062e5f7d882c7d4d8601c0d.jpg)

![](https://i.pinimg.com/564x/99/89/1b/99891b8afa9b64940f8375c07e01a170.jpg?b=t)

![](https://serverental.com/wp-content/uploads/2017/07/Lenovo-x3650-M5-Intel-Xeon-E5-2620-v4-Server-for-sale.jpg)

## Як вони між собою спілкуються?

Client-Server Communication

![](https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-request-response.png)

Request-Response model

![](https://s3.amazonaws.com/one-month-rails-production/assets/images/000/000/075/original/image01.png?1412885329)

## Що таке Протокол?

![](https://www.royal.uk/sites/default/files/images/feature/bday.jpg)

> First thing you need to know and understand is that HTTP is a protocol. That would be the P character in the acronym. What is a protocol good for? Many, many years ago one teacher tried to explain a protocol this way and I cannot think of any better way.
> 
> If you are going to visit the Queen of England (or any other of those blue blooded people) you are confronted with a list of things you are allowed to do and things you should not do under any circumstances. This list is called the royal protocol. There are also protocols in diplomacy. Other terms in this regard are Etiquette, Manners or Conventions.
> 
> Protocols in the computer world are certainly nothing like etiquette but more or less like the manners how computer components interact with each other. Convention is probably the most fitting term other than protocol.


![](https://pp.vk.me/c408218/v408218522/74a6/kUSar9bW6b8.jpg)

## Які протоколи існують?

[https://en.wikipedia.org/wiki/Lists_of_network_protocols](https://en.wikipedia.org/wiki/Lists_of_network_protocols)

[https://www.w3.org/Protocols/](https://www.w3.org/Protocols/)

SOAP, IP, DNS, HTTP, POP3, SMTP, FTP, NTP, IRC, etc.

Telegram MTProto - [https://core.telegram.org/mtproto](https://core.telegram.org/mtproto).

## Багатошарова архітектура (Layered architecture)

_pen_
![](https://images-na.ssl-images-amazon.com/images/I/51X9oIx70kL._SX425_.jpg)

_The pen in box_
![](http://proline.biz.ua/images/groove-a-5-hpn-box-pack-1024x680.jpg)

_The pen in box with declaration_
![](https://pp.vk.me/c304214/v304214149/5537/Snx8K3thgnk.jpg)

_The pen in box with declaration is delivering to receiver_
![](http://mmr.ua/uploaded/materials/8db0e5394f.jpg)

_The pen in box with declaration is delivered to receiver._
![](http://media.static.fedoriv.com/uploads/2015/03/Nova_poshta_case9_1.jpg)

_The pen in box with declaration is delivered to receiver. He got it, confirmed that he is receiver and got the box._
![](https://pbs.twimg.com/profile_images/608402882132606976/p9NIyVb4.jpg)

_The pen in box with declaration is delivered to receiver. He got it & confirmed personality, unboxed and got the pen._
![](https://images-na.ssl-images-amazon.com/images/I/51X9oIx70kL._SX425_.jpg)

## Багатошарова архітектура у роботі WWW

![](https://community.fs.com/blog/wp-content/uploads/2017/11/seven-layers-of-OSI-model.png)


![](http://static.thegeekstuff.com/wp-content/uploads/2011/10/tcp-ip.png)

Model OSI vs TCP/IP Model.

## Що таке IP?

* IPv4
* IPv6

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ipv4_address_Spanish.svg/750px-Ipv4_address_Spanish.svg.png)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ipv6_address_leading_zeros.svg/1200px-Ipv6_address_leading_zeros.svg.png)

## Що таке Port?


![](https://i0.wp.com/www.dignited.com/wp-content/uploads/2018/11/laptop-ports.jpg?fit=640%2C427&ssl=1)

![](http://www.ortizonline.com/images/sockets.gif)

## Що таке DNS?

![](http://linux-training.be/networking/images/dns_01_what_is_dns.jpg)

```
~ $ host cursor.education
cursor.education has address 195.64.154.194
cursor.education mail is handled by 10 mail.cursor.education.
```

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

## HTTP headers


![](/assets/images/network-and-http/devtools-sample.png)

## Postman!

[https://www.getpostman.com/](https://www.getpostman.com/)

## HTTP in Depth (в деталях)

lorem ipsum

## HTTP Cookies

lorem ipsum

## HTTP перенаправлення на іншу адресу (redirect)

lorem ipsum

## HTTP Authentification

lorem ipsum

## HTTPS протокол

lorem ipsum

## Як завантажується сторінка?

lorem ipsum

## Again, для чого це мені (програмісту) потрібно?

lorem ipsum

---

Використані матеріали:
* [http:// for dummies](http://www.adrianworlddesign.com/Knowledge-Base/Web-Standards/Things-about-Hypertext/http-for-dummies)
* [The history of the Internet explained through pictures](https://www.electronicproducts.com/Interconnections/Wire_and_Cable/The_history_of_the_Internet_explained_through_pictures.aspx)
* [The History of Early Computing Machines, from Ancient Times to 1981](https://io9.gizmodo.com/the-history-of-early-computing-machines-from-ancient-t-549202742)
