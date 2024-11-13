const accountId=54486
let accountEmail="akkshay05@gmail.com"
var accountPassword="12345"
accountCity="Delhi"
let accountState;


// accountId=5  //Not allowed

accountEmail="akkshay@gmail.com"
accountPassword="54321"
accountCity="Mumbai"


console.log(accountId);

/*
Prefer not to use var because of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
