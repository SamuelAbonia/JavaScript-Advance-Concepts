// Global Execution Context
    // Creation Phase

        // 1. global object created
        // 2. initializes this keyword to global
    // Executing Phase 
        // 3. Variable Environment created - memory space for var variables and functions created
        // 4. initializes all variables to undefined (also known as hoisting) and places them with any functions into memory

this;
window;
this === window;

// Window {...}
// Window {...}
// true