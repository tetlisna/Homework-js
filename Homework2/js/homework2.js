// Task #1

// 1)

let x = 1;
let y = 2;
let res1 = x + "" + y // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

// 2)

let res2 = Boolean(y-x) + String(y) // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

// 3)

let res3 = !!(x + y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

// 4)

//let res4 = parseInt(Boolean(x*y));// Допишіть код, необхідно використовувати змінні x і y parseInt(Boolean(x)) or 
let res4 = parseFloat(!(x-y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

// Task #2

let userInput = prompt("Enter a number ", "");
if (userInput % 2 === 0 ) {
  console.log(`The number - ${userInput} is even `);
};
if (userInput % 7 === 0) {
  console.log(`The number - ${userInput}  is multiply of 7 `);
};

// Task #3

const  arr = [];
arr[0] = 1;
arr[1] = "Ukraine";
arr[2] = true;
arr[3] = null;
console.log(arr);
const askUser = prompt("Enter any number of array ", "");
arr[4] = askUser;
console.log(arr[4]);
arr.shift();
console.log(arr);

// Task #4 Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:Результат:"Rome*Lviv*Warsaw"

let cities = ["Rome", "Lviv", "Warsaw"]; 
const str = cities.join("*");
console.log(str);

// Task #5 Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult.
// В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести 
//“Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”

let isAdult = prompt("How old are you? ", "");
if (isAdult >= 18){
  alert("Youa are an Adult");
} else {
  alert("Youa are too young");
}

// Task #6 Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
// 	a) визначити і вивести в консоль площу трикутника 
// 	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘.
// Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).  

let userA = +prompt("Enter a side A of a triangle", );
let userB = +prompt("Enter a side B of a triangle", );
let userC = +prompt("Enter a side C of a triangle", );
if (Number(userA, userB, userC)){
let p = 0.5*(userA + userB + userC);
let sqrABC = Math.sqrt(p * (p - userA) * (p - userB) * (p - userC));
console.log(Math.trunc(sqrABC*1000)/1000); // or sqrABC.toFixed(3);
} else { 
  console.log("Incorrect data");
}
//checking wether the triangle is right-angled
if ((a * a + b * b === c * c) || (c * c + b * b === a * a || a * a + c * c === b * b)){
  console.log("the triangle is right-angled");
} else {  
  console.log("the triangle isn't right-angled");
}

// Task #7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із 
// системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

const dateCurr = new Date();
let currHours = dateCurr.getHours();
switch(currHours){
   case currHours>=23 && currHours<6:
    console.log("Доброї ночі");
   break;
   case currHours>=11 && currHours<18:
    console.log("Доброго дня");
   break;
   case currHours>=5 && currHours<12:
    console.log("Доброго ранку");
   break;
   default:
    console.log("Доброго вечора");
   break;
}
console.log(currHours);

// with if operator

const dateNow = new Date();
let currH = dateNow.getHours();
if (currH>=23 && currH<6){
  console.log("Доброї ночі");
} else if (currH>=11 && currH<18){
  console.log("Доброго дня");
} else if (currH>=5 && currH<12){
  console.log("Доброго ранку");
} else {
  console.log("Доброго вечора");
}

console.log(currH);
