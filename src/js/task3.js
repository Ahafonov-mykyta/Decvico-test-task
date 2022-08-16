//3. Make a function that takes a number n, and returns a two-dimensional array with
//length n*n, with 2 on the diagonal and 1 on the top and bottom of the resulting segment


//Пишем функцию которая принимает размер массива в качестве агрумента

function createArray (lenght){
    let arr = [];
        
    for(let i = 0; i < lenght; i++){ // Создаем масив и запускаем цикл в цикле для создания элементов двумерного массива
      arr[i] = [];
      for(let j = 0; j < lenght; j++){
        if(i === j || i === lenght - j - 1){ // Условие ставит 2 на диагонали матрицы
            arr[i][j] = 2
        } else if ( (i > lenght - j - 1 && i>j ) || (i < lenght - j - 1 && i<j)){ // Условие ставит 1 на верхний и нижний угол конверта матрицы, т.е. заполняет место между диагонями
            arr[i][j] = 1
        }
        else{ // Условие ставит 0 на боковые углы конверта матрицы 
            arr[i][j] = 0
        }
         
      }
    }
    return arr;
    }
    console.log( "Task 3, Array:");
    console.table(createArray(5));