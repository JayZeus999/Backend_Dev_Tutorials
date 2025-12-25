function hashtags () {
    let sevenTags = [];
    for (let i = 0; i < 7; i++) {
        sevenTags += "#";
        console.log(sevenTags);
    }
    
    // cascade down the triangle
    let arr = sevenTags.split("")
    for (let i = 7; i > 0; i--){
        arr.pop();
        let string = arr;
        console.log(string.join(""));
    }
}

hashtags();