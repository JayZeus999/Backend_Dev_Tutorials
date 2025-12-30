function callBack(result) {
    console.log(result);
};

let arrow = (a, b, myCallBack) => {
    let c = a + b;
    myCallBack(c);
}

arrow(1, 2, callBack);