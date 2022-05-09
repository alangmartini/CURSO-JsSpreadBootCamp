const mynumbers = [];

for(var i = 0; i <= 100; i++) {    
    mynumbers.push(i)
}



let  a = mynumbers.filter((item) => item % 2 == 0)

console.log(a)