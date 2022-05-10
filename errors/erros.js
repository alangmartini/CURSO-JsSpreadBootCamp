
function toValid(array, number) {
    try{
        if (!array || !number) { throw new ReferenceError('Referencie os parametros!'); }

        if ( typeof array !== 'object' ) { throw TypeError('Your array is not an Object!');}

        if (typeof number !== 'number') {throw TypeError('Your number is not an Number!')}

        if( array.length !== number) { throw RangeError('Your array size is different from your number')}
    
    } catch(e) {
        if (e instanceof ReferenceError){
            console.log("You've got an Reference error!");
            console.log(e.stack);
        }
        else if (e instanceof RangeError) {
            console.log("You've got an Range error!");
            console.log(e.stack);
        }
        else if (e instanceof TypeError) {
            console.log("You've got an Type error!");
            console.log(e.stack);
        }
        else {
            console.log("You've got some error!");
            console.log(e.stack);
        }
    }
}
const myArray = [0, 1, 3, 5]
const myNonObject = 3
toValid(myNonObject,  4)
toValid(myArray, 1)
toValid(myArray, 4)