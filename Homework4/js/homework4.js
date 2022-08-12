// ¬¬¬¬¬¬¬Practical task 3

// 1.Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
//Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height){
    try  {
        if ((!Number(width) || !Number(height))) {
            throw "Invalid data";
        }
    }
    catch (e){
        console.log(e);
    }
    return width * height;
}
console.log(calcRectangleArea(5, "f"));

// or
function calcRectangle(width, height){
    if (isNaN(width) || isNaN(height)) {
        throw new Error("is not a number");
    } else {
        return width * height;
    }
}
try {
    console.log(calcRectangle(2,"n"));

} catch (exception) {
    console.log(exception.message);
}

// 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли:
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),
// 	- нечислове значення
// 	- вік юзера менше 14 років.
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.

let userAge = prompt("Enter you age");
function checkAge(){
        if (!userAge) {
            throw new Error("The field is empty! Please enter your age");
        } else if (isNaN(userAge)) {
            throw new Error("Not a number");
        } else if (userAge < 14) {
            throw new Error("Too young");
        } else {
            alert("Access");
        }
    }
    try {
        console.log(checkAge(userAge));
    } catch (exception) {
        alert(exception.message);
    }

// 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
//Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця.
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків. Приклад роботи програми:console.log(showMonthName(5));
// May   console.log(showMonthName(14));    MonthException Incorrect month number

class MonthException extends Error{
  constructor(message) {
    super(message);
    this.name = "MonthException";
    this.message = "Incorrect month number";
  }
}
function showMonthName(month) {
  const monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (month > 12) {
    throw new MonthException;
  }
  return monthes[month - 1];
}

console.log(showMonthName(30));

// 4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких 
// айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення 
// про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) {
    if (id < 0){
        throw new Error("ID must not be negative:"+id);
    }
    return {id:id};

}
function showUsers(ids){
    return ids.map(id => {
        return showUser(id);
    })
    
}
try {
    console.log(showUser(5));
} catch (e) {
    console.log(e.message);
}
const ids = [7, 12, 44, 22];
console.log(showUsers(ids));
