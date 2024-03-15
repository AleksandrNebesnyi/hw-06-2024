// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue =0;

const BtnDecrement = document.querySelector('button[data-action="decrement"]');
const BtnIncrement = document.querySelector('button[data-action="increment"]');
const counter =document.querySelector('#value');

const  handleClickDecrement = () =>{
    counter.textContent = counterValue -=1;
};
const  handleClickIncrement = () =>{
    counter.textContent = counterValue +=1;
};

BtnDecrement.addEventListener('click',handleClickDecrement);
BtnIncrement.addEventListener('click',handleClickIncrement);
