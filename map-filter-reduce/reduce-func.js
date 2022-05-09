const myMap = new Map();

myNames = ['apple', 'orange', 'ananas', 'banana', 'pomegranade', 'coconut']
//simply populate our fruit catalog with random prices, for complexness sake
for(fruits of myNames){
    var b = Math.floor(Math.random() * 10 + 1)
    myMap.set(fruits, b)
}


function calc(myCatalog, totalMoney) {
    let myPrices = [];

    for([key, value] of myCatalog) {
        myPrices.push(value);
    }

    let total =  myPrices.reduce((previousValue, CurrentValue) => previousValue + CurrentValue, 0);

    return totalMoney - total
}

console.log(calc(myMap, 50))
