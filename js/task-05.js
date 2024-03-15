// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані 
// повинен відображатися рядок "Anonymous".

const inputEl= document.querySelector('#name-input');
const spanEl= document.querySelector('#name-output');
const titleEl=document.querySelector('h1');
console.log(titleEl.textContent);


inputEl.addEventListener('input', onChangeInput);

function onChangeInput(event) {

    const inputValue = event.currentTarget.value.trim();
    titleEl.textContent = inputValue ? `Hello ${inputValue}!` : 'Anonymous';
    
    
}