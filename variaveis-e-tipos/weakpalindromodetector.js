// here we got several choices depending on the tool we use
// i will use join() that i saw at some point in the classes
// and stringify which i saw when searching for a way to join arrays back into strings
// None of them work on phrases - as do the palindromodetector
// Method 1
function isPalin1(phrase){

    straight = phrase.split('');
    inverse = [];
    for( var i = 0 ; i < straight.length ; i++) { inverse.unshift(straight[i])}
    inverse.join('') === straight.join('') ? console.log('Gratz, you found a palindrome!') : console.log('Too bad, try again!');
}

// method 2
function isPalin2(phrase){

    straight = phrase.split('');
    inverse = [];
    for (var i = 0; i < straight.length; i++) { inverse.unshift(straight[i]) }
    if (JSON.stringify(straight) === JSON.stringify(inverse)) {
        console.log('Gratz, you found a palindrome!');
    }
    else { console.log('Too bad, try again!'); }

}

isPalin1('a cara rajada da jararaca')
isPalin2('a cara rajada da jararaca')