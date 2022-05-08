
function compare(a, b){
     
    a === b ? equals = 'são' : equals = 'não são';

    (a + b) > 10 && (a + b) < 20 ? inrange = true : inrange = false;
    (a + b) > 10 ? greater = 'maior' : greater = 'menor';
    (a + b) < 20 ? less = 'menor' : less = 'maior';
    
    console.log(`Os números ${a} e ${b} ${equals} iguais. Sua soma é ${a + b}, a qual é ${greater} que 10 e ${less} que 20`);

};

compare(10, 20);
