
// 1. Make a function that displays the number of times it has been called
// Example:
// foo() // 1
// foo() // 2
// foo() // 3

console.log("Task 1, First  implementation option:");
//1 Вариант
// Создаем функцию counter в которой будем использовать замыкание   

function counter() {
    let count = 0;       // Объявляем переменную Х и иницализируем её со значением 0.
    return function() {    // Создаем самовызывающуюся функцию, которая увеличивает счетчик и выводит значение в консоль
      count++ 
      console.log(count);
      return count;
    };
  }
  

  let foo = counter()  // Присваем пременной foo ссылку на функцию
  
foo() // 1
foo() // 2
foo() // 3


console.log("Task 1, Second implementation option:");
// 2 Вариант
// Более простой вариант, объявляем переменную х и инициализируем её со значением 0 в глобальной области видимости 
let x = 0;

//Создаем функцию - счетчик, которая увеличивает значение х при каждом её вызове и выводит в консоль

function counterX (){
    x++
    console.log(x);
    return x
}


counterX() // 1
counterX() // 2
counterX() // 3