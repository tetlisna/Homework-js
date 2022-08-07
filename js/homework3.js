// ¬¬¬¬¬¬¬Practical task 3

// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.
// const arr = [2, 3, 4, 5];
// let result = 1;
// for (let i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }
// or with while
// let result = 1;
// let i = 0;
// while (i < arr.length) {
//   result *= arr[i];
//   i++;
// }
// console.log(result);

// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, 
// і відображатиме повідомлення на екрані.
// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even" 

// for(let i = 0; i <= 15; i++){
//   if(i % 2 === 0){
//     return i +" is even";
//   } else {
//     return i +" is odd";
//   }
// }
// console.log(i);


// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

// Sample Output:
// [399,310,232,379,40]
// function randArray(k) {
//     let arr = [];
//     for (let i=1; i<=k; i++){
//         arr.push(Math.floor(Math.random(k)*500));
//     }
//     return arr;
// }

// console.log(randArray(5));

// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення 
//чисел a, b з клавіатури.


// function raiseToDegree(a, b){
//     return a**b;

// }

// console.log(raiseToDegree(3, 4));  // 81


// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. 
// Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
//  // => -4
// function findMin(arguments){
//     return Math.min(...arguments);
// }

// const arguments = [12, 14, 4, -4, 0.2];
// console.log(findMin(arguments));

// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів),
// то функція поверне true, інакше - false.
// Sample Output:
// function findUnique(arr) {
//     for(let i = 0; i < arr.length; i++){
//         let variant = arr.pop();
//         if(arr.includes(variant)) return false;
//     }
//     return true;
// }

// console.log(findUnique([1, 2, 3, 5, 9]));  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// console.log(findUnique([1, 2, 3, 5, 3]));


// 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, 
//що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]
// function lastElem(arr, x) {
//     const newArr = [];
//     if (!x) x = 1;
//     for ( let i = 0; i < x; i++){
//         newArr.push(arr.pop());
//     }
//     return newArr;
// }

// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5],3));

// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

// Input string: 'i love java script';
// Output string: 'I Love Java Script';

// let str = 'i love java script';
// const arr = str.split(" ");
// function upStr(str) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);

//     }
//     return arr.join(" ");

// }

// console.log(upStr(str));