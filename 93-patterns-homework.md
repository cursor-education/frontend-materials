---
title: PATTERNS HOMEWORK
---
# Homework #9 PATTERNS
Главная задача этого домашнего задания: написать интерфейс для получения
чисел Фибоначчи, применяя паттерн **итератор**. Интерфейс должен
предоставлять следующие методы:


1. **iterator.current()** – возвращаем текущий элемент. 
2. **iterator.next()** – возвращаем следующий элемент и переключаем
   итератор. Теперь current() вернет следующее число. 
3. **iterator.rewind()** – Сбросить итератор. Теперь current() вернет 0.
4. **iterator.key()** – возвращаем текущий номер(индекс) числа
   Фибоначчи. (Например для числа 8 вернём индекс 6)
5. **Дополнительно**: **iterator.prev()** – возвращаем предыдущий
   элемент.
   
   **Удачи с выполнением этого домашнего задания! Помните: паттерны не
   обязаны быть "правильными" экспериментируйте!**

##### Код с занятия по паттернам: <https://gist.github.com/trostinsky/8198ffad2dfa200c2ef4680a241de40c>
