
# Homework

Do at least 5 tasks.

1. A function which prints `str` after `n` seconds.
```javascript
function printTimeout(str, n) { /* your code */ }
printTimeout('hello', 10) // hello will appear after 10secs in console
```

2. A function which returns sum of all numbers from `1` to `n` using recursion.
```javascript
function sumAll(n) { /* your code */ }
sumAll(2); // 3
sumAll(4); // 10
```

3. A function which takes `str` and `time` in seconds as arguments,
then every second it should count down from `time`
to `0` and print current time to console when time equals to 0 it prints `str`
```javascript
function bombTimer(str, time) { /* your code */ }
bombTimer('Boooom', 3);
3
2
1
Boooom
```

4. A function which returns factorial of number using recursion.
```javascript
function factorial(n) { /* your code */ }
factorial(3); // 6
factorial(5); // 120
```

5. Implement function from task №3 (bombTimer) using recursion and `setTimeout`.

6. A function which takes an array of numbers and `maxNumber`, the function returns new array with numbers not higher than maxNumber.
```javascript
function filterNumbers(arr, maxNumber) { /* your code */ }
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]
```

7. A function that returns object with min and max numbers from array of numbers.
```javascript
function minMax(arr) { /* your code */ }
minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }
```

8. A function that returns average of numbers in array.
```javascript
function average(arr) { /* your code */ }
minMax([1,4,2]) // 2.33
```

9. A function which concats all first-nested arrays in one array (use `reduce`):
```javascript
function concatFirstNestedArrays(arr) { /* your code */ }
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]
```

10. A function accepts array of users and returns object of users where key is user id and value user data.

```javascript
const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' }
  { id: 2, name: 'Bill', birthday: '1999-1-19' }
  { id: 3, name: 'Carol', birthday: '1999-0-11' }
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) { /* your code */ }
usersToObject(users)
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' }
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' }
//  3: { id: 3, name: 'Carol', birthday: '1999-0-11' }
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };
```

11. A function returns array of users that have birthdays in a specific month.

```javascript
const users = [
  { name: 'John', birthday: '1999-2-12' }
  { name: 'Bill', birthday: '1999-1-19' }
  { name: 'Carol', birthday: '1999-0-11' }
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) { /* your code */ }
filterUsersByMonth(users, 0) // [{ name: 'Carol', birthday: '1999-0-11' }]
```

12. A function returns name and age of users separated by comma that are older than 18.

```javascript
const users = [
  { name: 'John', birthday: '1999-6-12' }
  { name: 'Bill', birthday: '2005-5-19' }
  { name: 'Carol', birthday: '2003-10-11' }
  { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) { /* your code */ }
usersToString(users) // 'John 19, Luce 18'
```