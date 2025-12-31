function l(arg) {
    console.log(arg);
};

async function letMeWait() {
    let thePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The 1st promise has been resolved.");
            resolve(10);
        }, 2 * 1000);
    })
    
    let promiseResult = await thePromise;

    return promiseResult;
}

l(letMeWait()); 