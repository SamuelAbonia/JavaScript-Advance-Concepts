/*
    This is an exercise of how to use enclouser to prevent a function call more that 1 time
*/

let view1;
function initializer() {
    let counter = 0;
    return () => {
        counter++;
        if (counter === 1) {
            view1 = 'Mountain';
            console.log('It is been initialize')
        }
    }
}
const initializerVar = initializer()
initializerVar()
initializerVar()
initializerVar()
console.log(view1)