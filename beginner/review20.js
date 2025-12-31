function callBack(result) {
    console.log(result);
};

let arrow = (a, b, myCallBack) => {
    let c = a + b;
    myCallBack(c);
}

arrow(1, 2, callBack);
callBack(10000);

// Anonymous function. Which is the anonymous f. above?
setTimeout(function() {
    console.log("hope");
}, 1000);


 // A Promise.
 let buySomeGroceries = new Promise(function(myResolve, myReject) {
    let supperIngredientsComplete = true;
    if (supperIngredientsComplete) {
        myResolve("Your supper is ready.")
    } else {
        myReject("The store is closed for the day, so no supper.")
    }
 });

 // Using the Promise.
 buySomeGroceries.then(
    function(value) {
        console.log("Here's your supper.", value);
    },
    function(reason) {
        console.log("That's why we couldn't get the coffee.", reason);
    }
 );

// .catch() gives a ??
 let sendMeMoney = new Promise(function(resolve, reject) {
    let gotSomeMoney = true;
    if (gotSomeMoney) {
        resolve("I got that mula"); 
    } else {
        reject("Omo, mo broke gan!");
    }
 }) 

 sendMeMoney.then(
    function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    })
