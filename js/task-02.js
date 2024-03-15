
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const parentNode= document.querySelector('#ingredients');
const itemArray=[];
ingredients.forEach(element => {
  const item = document.createElement("li");
  item.textContent=element;
  item.classList.add('item');
  return itemArray.push(item)
});

console.log(itemArray);


parentNode.after(...itemArray);
// console.log(item.classList.contains('item'));