let count = 0

const CURRENT_NUMBER = document.getElementById('currentNumber');
const element1 = document.getElementById('adicionar');
const element2 = document.getElementById('subtrair');


function increment(){
    count ++;
    CURRENT_NUMBER.innerHTML = count;
    if (count >= 0){
        CURRENT_NUMBER.style.color = 'black';
    }
    

}


function decrement(){
    count --;
    CURRENT_NUMBER.innerHTML = count;
    if (count < 0){
        CURRENT_NUMBER.style.color = 'red';
    }
}


element1.addEventListener('click', increment)
element2.addEventListener('click', decrement)
