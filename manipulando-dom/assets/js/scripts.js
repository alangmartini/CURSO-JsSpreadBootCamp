
const MY_H1 = document.getElementById('page-title');
const MY_BTN = document.getElementById('mode-selector');
const MY_FOOT = document.querySelector('footer')
const MY_BODY = document.body

MY_BTN.addEventListener('click',  () =>{
    MY_BTN.classList.toggle('dark-mode')
    MY_H1.classList.toggle('dark-mode')
    MY_BODY.classList.toggle('dark-mode')
    MY_FOOT.classList.toggle('dark-mode')
    
})
