function l(arg) {
    console.log(arg);
};

// Exceptions.
let num = 1;

try {
    // l(num.toPrecision(500)); 
    x = y + 999;
} catch(error) {
    console.log(error.message);
}