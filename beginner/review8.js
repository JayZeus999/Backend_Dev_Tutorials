const users = [{name: "Jay", hobby: "reading"},
               {name: "John", hobby: "programming"},
               {name: "Jerry", hobby: "reading"}
];

console.log(users.length);

for (let user of users) {
    console.log(user.name);
}

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].name);
//     console.log(`${users[i].hobby}\n`);
// };

// users.forEach(function(user){
//     console.log(user["name"])
//     console.log(`${user.hobby}\n`)
// });