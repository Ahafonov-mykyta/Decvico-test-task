//2. Write a function that replaces all ones with zeros and vice versa for the object

const d = {
    left: {
      left: {
        left: 1,
        right: {
            left: 0,
            right: 1,
            },
        },
    right: {
        left: 0,
        right: 1,
     },
    },
        right: 1,
    }

    console.log("Task 2, Original object:", d);
    // Объявляем функцию reverseObjectValues, которая принимает в качестве аргумента объект любой вложенности

    function reverseObjectValues (d){
        for (let key in d ) {                        //Запускаем цикл for..in по первой вложенности
            if(typeof d[key] === "object"){          //Если значение свойства это объект - запускаем рекурсию
                reverseObjectValues(d[key])          
         }
          else{
            d[key] = d[key] === 1? 0:1               //Если значение свойства это не объект(при условии, что это всегда число 1 либо 0)- тернарным оператором заменяем значение на противоположное
          }  
    }}


    reverseObjectValues(d)
    console.log( "Task 2, Object of reversed values:", d);

