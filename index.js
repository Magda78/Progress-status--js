const next = document.getElementById('next');
const prev = document.getElementById('prev');
const numbers = document.querySelectorAll('.numbers');
const line = document.getElementById('line');
const progress = document.querySelector('.progress');
const active = document.querySelectorAll('.active');

let element = 1;

const nextHandler = () => {
	element ++;
	update();
};

const prevHandler = () => {
	element--;
	update();
};

function update()  {
	if(element === 4) { 
		next.disabled = true;
	} else {
		next.disabled = false
	}
	if(element === 1) {
		prev.disabled = true;
	}else {
		prev.disabled = false;
	}
 numbers.forEach((el,idx)=> {
	 if(idx < element) {
		el.classList.add('active');
	 } else {
		el.classList.remove('active');
	 }
 })
 const active = document.querySelectorAll('.active');
 line.style.width = ((active.length-1) / (numbers.length-1)) * 100 +'%';
 console.log(line.style.width);
}

next.addEventListener('click', nextHandler);
prev.addEventListener('click', prevHandler);
