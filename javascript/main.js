// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
const form = document.getElementById('my-form');


// Multiple element
console.log(document.querySelectorAll('.item'));
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


const ul = document.querySelector('.items');
// ul.remove();

const btn = document.querySelector('.btn');
btn.computedStyleMap.background('red');