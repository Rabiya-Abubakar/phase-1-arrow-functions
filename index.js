//require ( './helpers.js' );
// Step 1: Declare a function expression called divide
const divide = function() {
    return 2000 / 100;
};

// Step 2: Declare an arrow function called square
const square = (x) => {
    return x * x;
};

// Step 3: Declare an arrow function called add
const add = (a, b) => {
    return a + b;
};

// Exporting the functions to be tested
module.exports = {
    divide,
    square,
    add
};
