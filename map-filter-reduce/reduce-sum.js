const myNumbers = [];

for (var i = 0; i <= 100; i++) {
    myNumbers.push(i)
}

const a = myNumbers.reduce((prevValue, currentValue) => prevValue + currentValue, 0);

console.log(a);




