function l(arg) {
    console.log(arg);
};

async function letMeWait() {
    let thePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("The 1st promise has been resolved.");
            resolve("The 1st promise has been resolved.");
            reject("I'm a Judas, so i broke the promise like Brutus, rhymes lol.");
        }, 2 * 1000);
    })
    
    try {
        let promiseResult = await thePromise;
        l(promiseResult);
    }
    catch(reason) {
        l(`Reason: ${reason}`)
    }
}

l(letMeWait()); 