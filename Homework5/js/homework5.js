// ¬¬¬¬¬¬¬Practical task 3

// 1.Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
//Наприклад для об’єкта
// let mentor = {
//             course: "JS fundamental",
//             duration: 3,
//             direction: "web-development"
//         };
// function  propsCount(mentor) {
//     return Object.keys(mentor).length;
// }
// or
// function propsCount(mentor) {
//     let sizeKeys = 0;
//     for (i in mentor){
//         sizeKeys++
//     }
//     return sizeKeys;
// }
// console.log(propsCount(mentor));  // 3

// 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список
// його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.
// const obj = {
//     name: "Taras",
//     surname: "Shevchenko",
//     ukrainian: true,
//     job: "artist",
//     age:"internal"
// }
// function showProps(obj){
//     return Object.keys(obj);
// }
// function showVal(obj){
//     return Object.values(obj);
// }
// console.log(showProps(obj));
// console.log(showVal(obj));

// 3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи.
// Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента.
// Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного
// року (визначити самостійно) і року вступу до ВУЗу year. -- Приклад результату: --
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6

class Person {
  constructor(surname, name) {
    (this.surname = surname), (this.name = name);
  }
  showFullName() {
    return this.name + " " + this.surname;
  }
}
const stud1 = new Person("Petrenko", "Petro", "Petrovych", 2016);

console.log(stud1.showFullName());

class Student extends Person {
  constructor(surname, name, year) {
    super(surname, name);
    this.year = year;
  }
  showFullName(midleName) {
    return this.name + " " + this.surname + " " + midleName;
  }
  showCourse() {
    let curYear = new Date().getFullYear();
    return curYear - this.year;
  }
}

const stud2 = new Student("Petro", "Petrenko", 2016);

console.log(stud2.showFullName("Petrovych"));
console.log("Current course: " + stud2.showCourse());

// 4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість
// відпрацьованих днів).
// 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
// 2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience().
// Вивести значення зарплати з цим коефіцієнтом.
//  3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 4) Вивести значення зарплати з новим experience.
// 5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по
// зростанню і вивести результат в форматі:   worker_fullName: salary_value
// 6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

// Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();

// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// let worker2 = new Worker("Tom Tomson", 48, 22);
// let worker3 = new Worker("Andy Ander", 29, 23);
// Output example:
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690
// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584

class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    (this.fullName = fullName),
      (this.dayRate = dayRate),
      (this.workingDays = workingDays);
    // this.#experience = 1.2
  }
  get experience() {
    return this._experience;
  }
  set experience(value) {
    this._experience = value;
  }
  showSalary() {
    return this.dayRate * this.workingDays;
  }
  showExp() {
    return this.dayRate * this.workingDays * this.#experience;
  }
  showSalaryWithExperience() {
    return this.dayRate * this.workingDays * this._experience;
  }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName, "salary:", worker1.showSalary());
console.log(worker1.fullName, "salary:", worker1.showExp());
worker1.experience = 1.5;
console.log("New experience: ", worker1.experience);
console.log(worker1.fullName, "salary:", worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName, "salary:", worker2.showSalary());
worker2.experience = 1.5;
console.log("New experience: ", worker2.experience);
console.log(worker2.fullName, "salary:", worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName, "salary:", worker3.showSalary());
worker3.experience = 1.5;
console.log("New experience: ", worker3.experience);
console.log(worker3.fullName, "salary:", worker3.showSalaryWithExperience()); //1.5


function salarySort(workers) {
    let sortedWorkers = workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience()).map(worker => {
        let returnedWorker = {};
        returnedWorker[worker.fullName] = worker.showSalaryWithExperience();
        console.log(worker.fullName + ": " + worker.showSalaryWithExperience())
        return returnedWorker;
    });
    return sortedWorkers;
}

salarySort([worker1, worker2, worker3]);


// 5. Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
// Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(),
// для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
// Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу
// з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. 
// Для реалізації функції можете використати метод reduce().
// Приклад результату:
// Geometric figure: Triangle - area: 10
// Geometric figure: Square - area: 49
// Geometric figure: Circle - area: 78.53981633974483
// 137.53981633974485 // total area

class GeometricFigure {
    getArea() {
    return 0;
}
    toString() {
    return Object.getPrototypeOf(this).constructor.name;
}
}

class Triangle extends GeometricFigure{
    constructor(a, b) {
        super ()
        this.a = a,
        this.b = b
    }
        getArea() {
            return (this.a * this.b)/2;
        }
}

class Square extends GeometricFigure{
    constructor(c) {
        super ()
        this.c = c
    }
    getArea() {
        return this.c ** 2;
    }
    
}
class Circle extends GeometricFigure{
    constructor (r) {
        super ()
        this.r = r
    }
    getArea() {
        return 3.14 * (this.r ** 2);
    }
}

const geometricFigure = new GeometricFigure();
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(){
  let areas = figures.map(fig => {
    console.log(`Geometric figure: ${fig.toString()} - area: ${fig.getArea()}`);
    area = {};
    return area = fig.getArea();
  }
  );
  return areas.reduce((total, item) => total+item);
}

console.log(handleFigures());
