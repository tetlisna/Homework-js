//2
alert("Lisna");
let userFirstName = "Tanya";
let userLastName = "Lisna";
console.log(userFirstName);
console.log(userLastName);
//3
userLastName = "Tanya";
console.log(userLastName);
//4
const someObject  = {
    description: "Here are some text",
    count: 99,
    active: true,
    "type-some": undefined,
    "value of object": null
 }
console.log(someObject);
//5
let isAdult;
isAdult = confirm(userFirstName +", are you 18 years old and older?");
console.log(isAdult);
// 6
let birthYear = 1985;
let isStudent = true;
let nameGroup = "JS Fundamentals 2022";
let isMarried = true;

console.log(birthYear, typeof(birthYear)); // number
console.log(isStudent, typeof(isStudent)); // boolean
console.log(nameGroup, typeof(nameGroup)); // string
console.log(isMarried, typeof(isMarried)); // boolean

let someRandomNull = null;
let someRandomUndefined;
console.log(someRandomNull);
console.log(someRandomUndefined);
console.log(typeof(someRandomNull)); // returns object
console.log(typeof(someRandomUndefined)); // returns undefined

//7
let userLogin = prompt("Enter your login");
let userEmail = prompt("Enter your email");
let userPass = prompt("Enter your password");
console.log("Dear, " + userLogin + ", your email is " + userEmail + ", your password is " + userPass);

//8

let secondForHour = 3600;
let secondForDay = 24 * secondForHour;
let secondForMonth = secondForDay * 31;
console.log(secondForHour, secondForDay, secondForMonth);