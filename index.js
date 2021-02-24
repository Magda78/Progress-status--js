const next = document.getElementById('next');
const prev = document.getElementById('prev');
const numbers = document.querySelectorAll('.numbers');
const line = document.getElementById('line');

let idx = 1


const nextHandler = () => {
const element = numbers[idx];
console.log(idx)
element.classList.add('active')
idx++;
console.log(element)   
}

const prevHandler = () => {
idx--;
const element = numbers[idx];
element.classList.remove('active')
console.log(element)
console.log(idx)
}




next.addEventListener('click', nextHandler);
prev.addEventListener('click', prevHandler);