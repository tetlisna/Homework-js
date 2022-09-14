// 2. Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
// 	Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

const http = require("http");
const os = require("os");

const personalmodule = require("./personalmodule");

const osuser = os.userInfo().username;

const greet = personalmodule(osuser);
const fulltext = `Date of request: ${new Date()} <br> ${greet}`;


// Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(fulltext);
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
