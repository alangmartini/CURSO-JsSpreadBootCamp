function isPalin(word) {
    // format the inputed word  so it doesnt have spaces and is lowercase
    let format = word.replace(/\s+/g, '').toLowerCase() 
    let wordLetters = format.split(''); 
    let mylength = wordLetters.length;
    let y = Math.floor(mylength / 2);
    let a = 0;
    for (var i = 0; i < y; i++) {
        if (wordLetters[i] == wordLetters[(mylength - 1) - i]) { a++; }
        else { a--; }
    }

    a === y ? console.log('Gratz! You got a palindrome!') : console.log('Not this time mate');

}

isPalin('Socorram me subi no onibus em Marrocos')
