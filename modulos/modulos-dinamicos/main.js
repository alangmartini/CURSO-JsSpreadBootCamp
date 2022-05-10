const BUTTON = document.getElementById('doit');

BUTTON.addEventListener('click', () => {
    import('./modules/meusmodulos.js')
    .then( function(mymodule) {  
        mymodule.turnRed()
    })});  
