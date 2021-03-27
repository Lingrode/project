"use strict";

// ПРОСТЫЕ ТИПЫ ДАННЫХ

// let number = 5; 
// let numberSecond = 13.37  // Тип данных - число, NaN - Not a Number

// const persone = "Alex, 5, Hello World!"; //  Тип данных - строка

// const bool = false; //  Тип данных - логический

// console.log(something); //  Тип данных - null, something не объявлен

// let und;
// console.log(und); //  Тип данных - undefined, переменная объявлена, но у нее нету значения



// ОБЪЕКТЫ

// const obj = {          
//   name: "John",        
//   surname: "Newman",   
//   age: 25,             
//   isMarried: false      
// };                     
// console.log(obj["name"],obj.surname,', age:', obj.age);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; // Тип данных - массив
// console.log(arr[3]);



// ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

// alert("hello");

// const result = confirm("Are you here?");
// console.log(result); 

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 10);

// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', ''); 
// document.write(answers);
// console.log(typeof(answers));



// ИНТЕРПОЛЯЦИЯ

// const category = 'toys';
// const categorySecond = 'kids-toys';
// console.log(`https://someurl.com/${category}/5/${categorySecond}/toy-1.html`); 

// const user = "Ivan";
// alert(`Привет, ${user}`);



// ОПЕРАТОРЫ

// console.log('arr' + ' - object');
// console.log(4 + +'5');

// let incr = 10,
//   decr = 10;
// incr++;     // Инкремент, постфиксная запись
// --decr;     // Декрмент, префиксная запись

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);   //% - Остаток от деления двух чисел

// console.log(2 * 4 == 8);   // == - Знак равенства
// console.log(2 * 4 === '8');   // === - Знак строгого равенства

// && - Оператор 'И'
// || - Оператор 'ИЛИ'

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || isClose);  
// console.log(isChecked && isClose); 

// ! - Оператор отрецания
// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose); 


// 1
// Самостоятельное решение
// let numberOfFilms;

// numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);
// Решение ментора
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 2
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// 3
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// console.log(personalMovieDB.count, personalMovieDB.movies, personalMovieDB.genres, personalMovieDB.privat);