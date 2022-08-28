// Practical task
// 1. На HTML-сторінці є елемент div:
// <body>
// <div id="test">First</div>
// </body>
// Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.

// const bodyEl = document.getElementById('test');
// console.log(bodyEl);
// let textC = bodyEl.innerHTML = "Last";

// or

// const text1 = document.querySelector('#test');
// let text2 = text1.innerHTML = "First";        //change back

// 2. На сторінці є елемент зображення:
//  <body>
//    <img class="image" src="dog.jpg">
//  </body>

// let image = document.querySelector('.image');
// image.src = '/Homework6/img/cat.jpg';
// alert(image.baseURI) or     alert(image.contains)

// alert(image.outerHTML)
/* // Потрібно змінити зображення dog.jpg на cat.jpg.
// Виведіть в модальному вікні вміст тегу img з новим зображенням.

// 3.  <body>
// 	<h2>Article header</h2>      
//       <div id="text">
//         <p>First paragraph</p>
//         <p>Second paragraph</p>
//         <p>Third paragraph</p>
//       </div>
// 	<p>Another text</p>
//     </body>
// На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll). 
// І вивести їх вміст із вказанням номеру абзацу в такому форматі:
// Selector text 0: First paragraph
// Selector text 1: Second paragraph
// Selector text 2: Third paragraph
*/
let textNew = document.querySelectorAll("#text p").forEach((Element, key) => {
  console.log(
    (Element.textContent = "Selector " + key + ": " + Element.textContent)
  );
});
//or
// for (let i = 0; i < textNew.length; i++) {
//   alert("Selector" + i + ": " + textNew[i].innerHTML);
// }

// 4. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
// 	1) першого елемента списку
// 	2) останнього елемента списку
// 	3) другого елемента списку
// 	4) четвертого елемента списку
// 	5) третього елемента списку
// Зробіть завдання 2 різними способами.
// Приклад:
// •	1
// •	2
// •	3
// •	4
// •	5
// Результат виводу: 1, 5, 2, 4, 3
// let parent = document.querySelector('#list');
// let countElement = parent.childElementCount;

// let textElement= parent.textContent;
// let firstChild = parent.firstElementChild;
// let lastChild = parent.lastElementChild;
// let nextChild = firstChild.nextElementSibling;
// let fourthChild = parent.children[countElement - 2];
// let thirdChild = parent.children[countElement - 1];

// alert("1 " + firstChild.textContent + " 1")
// alert("2 " + lastChild.textContent + " 5");
// alert("3 " + nextChild.textContent + " 2");
// alert("4 " + fourthChild.textContent + " 4");
// alert("5 " + thirdChild.textContent + " 3");

// or

// console.log(elements.item(0))
// const elements = document.querySelector('#list').children;
// alert(elements.item(0).textContent);
// alert(elements.item(4).textContent);
// alert(elements.item(1).textContent);
// alert(elements.item(3).textContent);
// alert(elements.item(2).textContent);

// or

// let elements = document.querySelectorAll('#list li');
// let textLi = [];
// elements.forEach((Element) => {
//   textLi.push(Element.textContent);
// }
// );
// let orderOfList = "first";
// let counter = 1;
// while(textLi.length){
//   if(orderOfList === "first"){
//     orderOfList = "last";

//     alert(counter + " " + textLi.shift());
//   } else {
//     orderOfList = "first";
//     alert(counter + " " + textLi.pop());
//   }
//   counter++;
// }

// 5. Для сторінки
// 		  <body>
// 		       <h1>I'am a big header!!!</h1>
//         <div id="myDiv">
//             <p>First paragraph</p>
//             <p>Second paragraph</p>
//             <p>Third paragraph</p>
//             <p>Fourth paragraph</p>
//         </div>
//         <ul id="myList">
//             <li>Make</li>
//             <li>me</li>
//             <li>horizontal!</li>
//         </ul>
//         <span>Make me invisible, please!</span>
// 	    </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:
let title1 = document.querySelector("h1");
title1.classList.add("green_bg");
let paragraphs = document.querySelectorAll("#myDiv p");
paragraphs.forEach((Element, key) => {
  if (key === 0) {
    Element.classList.add("bold");
  } else if (key === 1) {
    Element.classList.add("red");
  } else if (key === 2) {
    Element.classList.add("underline");
  } else if (key === 3) {
    Element.classList.add("italic");
  }
  console.log(Element.innerHTML);
});
let horizontal = document.querySelectorAll("#myList li");
horizontal.forEach((Element) => console.log(Element.classList.add("style")));
invisString = document.querySelector("span").classList.toggle("invisible");

// 6. Задано HTML-сторінку:
//     <body>
// <input type="text" id="input1" value="Text1">
// <input type="text" id="input2" value="Text2">
//   </body>
// 1)	Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 1-ий
// <input>, 2-ге – в 2-ий.
// 2)	Поміняти значення 1-го і 2-го інпутів місцями.
let user1 = document.querySelector("#input1");
let user2 = document.querySelector("#input2");
let user1Input = prompt("Enter text1");
let user2Input = prompt("Enter text2");
user1.value = user1Input;
user2.value = user2Input;

console.log(user1.value);
console.log(user2.value);
let user1Value = user1.value;
let user2Value = user2.value;
user1.value = user2Input;
user2.value = user1Input;

// 7. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.

// 		<body>
// 		  <main class="mainClass check item">
// 		        <div id="myDiv">
//            <p>First paragraph</p>
//          </div>
//        </main>
// 	    </body>

const mainElement = document.createElement("main");
document.body.append(mainElement);
mainElement.setAttribute("class", "mainClass check item");
const nextElement = document.createElement("div");
nextElement.id = "myDiv";
nextElement.innerHTML = "<p>First paragraph</p>";
mainElement.appendChild(nextElement);

//or
// const x = 100;
// document.body.innerHTML = `
//   <main class="mainClass check item">
//     <div id="myDiv">${x}
//     <p>First paragraph</p>
//     </div>
//   </main>
// `;
