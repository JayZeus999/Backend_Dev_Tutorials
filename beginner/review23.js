// Exceptions.
let num = 1;

try {
    // console.log(num.toPrecision(500)); 
    x = y + 999;
} catch(error) {
    console.log(error.message);
}

// URI Errors
try{
    decodeURI("%%%");
} catch(error) {
    console.log(error.message)
}


let denom = 0;
if (denom === 0) {
    throw new RangeError("Attempted division by zero."); // can also be TypeError.
}; 


var a = 100;
var b = 0;

try {
    if (b == 0) {
        throw("Divide by zero error.");
    } else {
        var c = a / b;
    }
} catch (error) {
    console.log("Error: " + error);
} finally {
    console.log("Code still runs in the end.");
}