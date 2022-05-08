function isPalin(word) {

    let wordLetters = word.split('');
    let mylength = wordLetters.length;
    let y = Math.floor(mylength / 2);
    let a = 0;
    for (var i = 0; i < y; i++) {
        if (wordLetters[i] == wordLetters[(mylength - 1) - i]) { a++; }
        else { a--; }
    }

    a === y ? console.log('Gratz! You got a palindromo!') : console.log('Not this time mate');

}

isPalin('abcdcba')
