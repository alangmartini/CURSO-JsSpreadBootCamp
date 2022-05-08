let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const element1 = document.getElementById('subtrair');
const element2 = document.getElementById('adicionar');


function increment() {
	if (count < 10){
		count++;
		CURRENT_NUMBER.innerHTML = count;
		element2.disable = false;
		console.log(count);
	}
	else{
		element2.disable = true;
	}
};

function decrement() {
	if (count > 0){
		count--;
		CURRENT_NUMBER.innerHTML = count;
		element1.disable = false;
		console.log(count);
	}
		
	else{
		element1.disable = true;
	}
}


element2.addEventListener('click', increment)
element1.addEventListener('click', decrement)

