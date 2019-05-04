---
title: TEST HOMEWORK
---
# Homework #10 ITERATOR TESTS
В этом задании вам нужно описать тесты с помощью Mocha/Chai для вашего
прошлого домашнего задания. Тестировать необходимо следующим образом

1. **iterator.current()** и **iterator.next()** –

 Создаем Iterator 
 
 -> получаем current === 0 -> вызываем next() -> получаем current === 1
 
 -> вызываем next() -> получаем current === 1 
 
 -> вызываем next() -> получаем current === 2 
 
 -> вызываем next() -> получаем current === 3 
 
 -> вызываем next() -> получаем current === 5 
 
 -> вызываем next() -> получаем current === 8.
   
   Или альтернативный более короткий вариант с таким же исходом: 
   
   Создаем Iterator -> вызываем next() 6 раз -> получаем current() === 8

2. **iterator.key()** – К прошлому тесту добавляем:
 
 Вызов key() === 6 

3. **iterator.rewind()** – К прошлому тесту добавляем: 

Вызываем rewind() -> получаем current === 0

4. **Дополнительно**: **iterator.prev()** – придумайте сами вариант
   тестирования :)

##### Код с занятия по тестам: <https://github.com/trostinsky/cursor-testing>
