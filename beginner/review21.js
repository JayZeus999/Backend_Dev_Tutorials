function l(arg) {
    console.log(arg)
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The 1st promise has been fulfilled.");
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The 2nd promise has been rejected.");
        reject(20);
    }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The 3rd promise has been fulfilled.");
        resolve(30);
    }, 3 * 1000);
});


Promise.all([p1,p2,p3]).then((results) => {
    setTimeout(() => {
        console.log(`Results:${results}`);
    }, 1000);
})
    .catch((error) => {
        l(`Error: ${error}`);
    });