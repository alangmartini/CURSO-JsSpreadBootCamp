let myArray = [30, 30, 40, 5, 223, 2049, 3034, 5]
const mySet = new Set()

for(nb of myArray){
    mySet.add(nb);
}

console.log(mySet)