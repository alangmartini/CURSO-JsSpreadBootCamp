const map = new Map();

map.set('orange', {'price' : 1.5});
map.set('apple', {'price' : 3.5});



function mapping(mymap) {
    const howMany = [1, 2, 3, 4, 5];
    for([key, value] of mymap) {
        var a = howMany.map((item) => item * this.value.price, value.price);
        console.log(`${key} prices for n amount of ${key} is \n ${a}`);
    };
    
};

mapping(map);
