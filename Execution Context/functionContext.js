// Function Execution Context
    // Only when a function is invoked, does a function execution context get created.

    // Creation Phase
        // 1. argument object created with any arguments
        // 2. initializes this keyword to point called or to the global object if not specified
    // Executing Phase
        // 3. Variable Environment created - memory space for variable and functions created
        // 4. initializes all variables to undefined and places them into memory with any new functions


// Function Execution Context creates arguments object and points 'this' to the function
function showArgs(arg1, arg2) {
  console.log("arguments: ", arguments);
  return `argument 1 is: ${arg1} and argument 2 is: ${arg2}`;
}

showArgs("hello", "world");

// arguments: { 0: 'hello', 1: 'world' }
// argument 1 is hello and argument 2 is world

function noArgs() {
  console.log("arguments: ", arguments);
}

noArgs();

// arguments: {}
// even though there are no arguments, the object is still created