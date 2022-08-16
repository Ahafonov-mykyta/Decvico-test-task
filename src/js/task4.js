// 4. Create a similar element, when you click on any of the blocks it should change own color


//Инициализируем блок контейнера
const container = document.querySelector(".container")


//Пишем функцию getRandomHexColor, которая генерирует случайный цвет
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Ставим обработчик событий на контейнер, отслеживаем на какой блок произошел клик с помощью  event.target
// Меняем инлайн стиль фона блока, на который произошло нажатие
container.addEventListener("click",(event) =>{
  event.target.style.backgroundColor = getRandomHexColor()
})