//////////////////////       Перетворення типів

console.log(5 + '5');
console.log(typeof (5 + '5')); // 	стрічка
console.log(5 * '5');
console.log(typeof (5 * '5')); // 	число. Оператор * буде намагатись перетворити будь-яку стрічку в число
console.log(5 * 'hi');
console.log(typeof (5 * 'hi')); // 	NaN

// Автоматисне перетворення типів відбувається також коли ми використовуємо опкратор "=="


console.log('5' == 5);

//Поведінка оператора == не завжди передбачувана

// Наприклад:

console.log('0' == false); // true
console.log(Boolean('0')); // І в цьому випадку при приведенні "0" в bool руками ми отримуємо true


console.log(0 == false);
console.log('5' == true);
console.log("" == false);

/* null та undefined не дорівнюють ніяким значенням окрім null та undefined */
console.log(null == false);
console.log(null == true);
console.log(undefined == false);
console.log(undefined == true);
console.log(undefined == null);

//Так як ми говорили на попередньому занятті, на практиці вам слід використовувати ===, тому ці речі показані просто для того, щоб ви мали уявлення

//Також ми млжемо використовувати Явні перетворення за допомогою спеціальних конструкторів

console.log(Number('5'));
console.log(typeof Number('5')); // 	число
console.log(String(5));
console.log(typeof String(5)); // 	стрічка
console.log(Boolean(1));
console.log(typeof Boolean(1)); // 	bollean

//Для перетворення числа в логічний тип можна виристовувати таке

console.log(!5);
console.log(!!5);
console.log(!!!5);
console.log(!0);
console.log(!!0);
console.log(!!!0);

// Перетворення числа в стрічку і стрічки в число

console.log(555 + '');
console.log(+'5');

// Розказати про метод toString, parseInt, parseFloat

///...


// toString(Infinity), toString(NaN)
let num = 15;
console.log(num.toString());
console.log(typeof num.toString());

console.log(Infinity.toString());
console.log(typeof Infinity.toString());
console.log(NaN.toString());
console.log(typeof NaN.toString());

// про не очевидне перетворення console.log(+'')

console.log(+'');
console.log(typeof +'');

// При перетворенні будь-яких значень в boll - ми звжли отримаємо true за вийнятком цих:
console.log(!!'');
console.log(!!NaN);
console.log(!!0);
console.log(!!null);
console.log(!!undefined);

// true

console.log(!!'Hi');
console.log(!!'      3'); // тут пробіли будуть проігноровані
console.log(!!'   g   3');
console.log(!!'      3 g');// NaN


console.log(parseInt('3 g')); // 3


// Перетворення bool в число
console.log(+true); // 1
console.log(+false); // 0

//Перетворення значення змінної в об'єкт

let variable = 5;
console.log(variable);
console.log(variable.value); // undefined, бо JS буде перетворювати "variable" в об'єкт шляхом пошуку властивості value
console.log(typeof variable); // 	число

// Якщо ми будемо перетворювати null в об'єкт - буде TypeError

// variable = null

// console.log(variable.value)


// Отже, якщо Ви це все гарно вивчите - Ви зможете позбавии себе від багатьох проблем

// Завжди потрібно використовувати оператор строгого порівняння ===

/*
    *   https://medium.freecodecamp.org/learn-these-core-javascript-concepts-in-just-a-few-minutes-f7a16f42c1b0
    *  Closure
    *  IIFE
    *  Callback


 */


//////////////////////       Closure


/* * При виконанні функції в JS використовеється та область видимості змінних яка істувала при оголошенні цієї функції.
    * Це називається лексичною областю видимості
    * На приктиці це виглядає так
*/

let func = function () {
    let a = 1;
    return function () {
        return a;
    }
};

let funk2 = function () {
    let a = 2;
    console.log(func()())
};

funk2(); // => 1  через лексичну область видимості виводиться 'a' з funk а не з funk2

// Приклад який ми сожемо застосувати на практиці

let counter = (function () {
    let count = 0;
    return function (num) {
        // count = num !== undefined ? num : count // показати як можна скинути рахівник
        return count++;
    }
}());

// Ще один варіант рахівника без використання Closure

// let counter = function (num) {
//     counter.count = num !== undefined ? num : counter.count;
//     return counter.count++;
// };
//
// counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


// Тобто замиканням ми можемо назвати функцію яка замикає лексичну область видимості. Грубо кажучи ми можемо назвати кожну функцію замиканням


//////////////////////       IIFE           https://getinstance.info/articles/javascript/immediately-invoked-function-expressions/


//         ES 5

// let carColor = 'Blue';
//
// const car = (function () {
//     return {
//         changeToRed: function () {
//             carColor = 'Red';
//             return carColor;
//         },
//         changeToBlack: function () {
//             carColor = 'Black';
//             return carColor;
//         },
//     }
// })();
//
// console.log(
//     car.changeToRed()
// );


//         ES 6

// let carColor = 'Blue';
//
// const car = (() => {
//     return {
//         changeToRed: () => {
//             carColor = 'Red';
//             return carColor;
//         },
//         changeToBlack: () => {
//             carColor = 'Black';
//             return carColor;
//         },
//     }
// })();
//
// console.log(
//     car.changeToRed()
// );


//////////////////////       Callback



function first() {
    // setTimeout(function () {
    //     console.log('1')
    // }, 100);
    console.log('1')
}

function second() {
    console.log('2')
}

first();
second();


//  Callback-функції дають можливість для зберігання чіткого порядку виконання ваших функцій.
//  Callback-функції дають можливість передати одну функцію інакшій в якості аргументу


function f1(callback) {
    console.log('1');
    callback();
    // callback(3,123);
}

// function f2 (a, b) {
//     console.log(a*b);
// }

// f1(f2);

f1(function () {
    console.log(1*400)
});




function press(callback) {
    console.log('Press button');
    callback();
}

function statusChecker() {
    console.log('Pressed')
}

press(statusChecker);


setTimeout(function () {
    console.log('1')
}, 1000);

setTimeout(function () {
    console.log('2')
});

setTimeout(console.log('3'), 1000);

setTimeout(console.log('4'));
