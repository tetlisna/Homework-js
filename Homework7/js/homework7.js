// Practical task

// 1. За допомогою методів об’єкта window створити:
// 	1) нове вікно розміром 300х300 пікселів.
// 	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// 	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// 	4) із затримкою 2 сек закрийте вікно.

let myWindow = window.open(" ", "new window", "_blank", width = 300, height = 300);
setTimeout(() => {
  myWindow.resizeTo(500,500);
}, 2000);
setTimeout(() => {
  myWindow.moveTo(200,200);
}, 4000);
setTimeout(() => {
  myWindow.close();
}, 6000);

// 2. Для заданої HTML-сторінки:

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>:
//колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS".

const btn = document.querySelector("#change-style");

btn.addEventListener("click", function changeCSS() {
  const textChange = document.querySelector("#text");
  textChange.classList = "change";
});

{/* <p id ='text'>I learning JavaScript events!</p>
<div>
	<button . . . . . >Change style!</button>
</div> */}

// 3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
// 	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
// 	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
// 	Приклад – курсор наведений на лінку.

let btn1 = document.querySelector("#btn1");
let container = document.querySelector("#container");
  btn1.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
});

let btn2 = document.querySelector("#btn2");
  btn2.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "pink";
});
let btn3 = document.querySelector("#btn3");
  btn3.addEventListener("mousedown", function () {
    document.body.style.backgroundColor = "brown";
  btn3.addEventListener("mouseup", function () {
    document.body.style.backgroundColor = "white";
  });
});

let link = document.querySelector("#btn4");
  link.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "yellow";
});

// 4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
let selectOpt = document.querySelector("#select");

function remove() {
  selectOpt.remove(selectOpt.selectedIndex);
}
let selectBtn = document.querySelector("#btn-choose");
  selectBtn.addEventListener("click", remove);

// 5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

btnLive = document.querySelector("#btn-live");

let p1 = document.querySelector("#mouseon");
let p2 = document.querySelector("#press");
let p3 = document.querySelector("#mouseout");

btnLive.onmouseover = function () {
  p1.innerHTML = "Mouse on me!";
};

btnLive.addEventListener("click", function () {
  p1.innerHTML = "I was pressed!";
});

btnLive.addEventListener("mouseout", function () {
  p1.innerHTML = "Mouse is not on me!";
});

// 6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при
// її розтязі/стисканні відповідні значення.

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function sizeBrowser() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
window.addEventListener("resize", sizeBrowser);

// 7*. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб
// коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно,
// через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.

// Код HTML-сторінки:
/* <select name="country" id="country">
	<option value="ger">Germany</option>
	<option value="usa">USA</option>
	<option value="ukr">Ukraine</option>
</select>

<select name="cities" id="cities"></select>
<p></p> */

const objectCountryCity = {
  ukr: ["Kyiv", "Lviv", "Kharkiv"],
  usa: ["New-York", "Orlando", "Los-Angeles"],
  ger: ["Berlin", "Dresden", "Munich"],
};

let citiesList = document.querySelector("#cities");
let countryList = document.querySelector("#country");
let textShow = document.querySelector("#show");

function generateCities() {
  const selectedCountry = countryList.value;
  const selectedOption = objectCountryCity[selectedCountry];
  citiesList.innerHTML = "";

  Array.from(selectedOption).forEach(function (el) {
    let option = new Option(el);
    citiesList.appendChild(option);
  });
  showSelected();
}

generateCities();

countryList.addEventListener("change", function () {
  generateCities();
  showSelected();
});
citiesList.addEventListener("change", function () {
  showSelected();
});

function showSelected() {
  const selectedCity = citiesList.value;
  let countryListOption = document.querySelectorAll("#country option")[countryList.selectedIndex].innerHTML;
  textShow.innerHTML = " " + countryListOption + ", " + selectedCity;
}
