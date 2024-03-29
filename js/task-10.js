
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і 
// натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція 
// елементів  очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor 
// для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputEl = document.querySelector('input');
// const btnCreateEl= document.querySelector('button[data-create]');
// const btnDestroyEl= document.querySelector('button[data-destroy]');
// const containerEl = document.querySelector('#boxes');

// btnCreateEl.addEventListener('click', onMakeMarkup);
// btnDestroyEl.addEventListener('click', onDeleteMarkup);

// function onMakeMarkup() {
//     MakeMarkup(inputEl.value)
//     inputEl.value="";
// } 
// function MakeMarkup(amount) {   
//   onDeleteMarkup();
//   for (let i = 0; i < amount; i +=1) {
//     const box = document.createElement('div');
//     box.classList.add('box');
//     containerEl.insertAdjacentElement("beforeend", box)
//     console.log(containerEl);
// };
// }







const inputEl = document.querySelector('input');
const btnCreateEl= document.querySelector('button[data-create]');
const btnDestroyEl= document.querySelector('button[data-destroy]');
const containerEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', onMakeMarkup);
btnDestroyEl.addEventListener('click', onDeleteMarkup);

function onMakeMarkup() {
  createBoxes(inputEl.value)
    inputEl.value="";
} 

 function onDeleteMarkup() {
  console.log('Click delete');
  containerEl.innerHTML='';
 };



 function createBoxes(amount) {
  onDeleteMarkup(); // Clear existing boxes

  let size = 30; // Initial size

  for (let i = 0; i < amount; i +=1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    containerEl.appendChild(box);
    size += 10; // Increase size for the next box
  }
}