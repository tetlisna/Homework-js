// Practical task
// 1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).
const http = require("http");
const path = require("path");
const os = require("os").userInfo().username;
const ostype = require("os").type;
const ostime = require("os").uptime;
const osdir = require("os").homedir;
const osfile = path.basename(__filename);


let html = `<strong>System information:</strong><br><br>
Current user name: ${os}<br>
OS type: ${ostype} <br>
System work time: ${ostime} minutes <br>
Current work directory: ${osdir} <br>
Server file name: ${osfile} `;

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
})

console.log(os);

server.listen(5000);
console.log('Server running at...');

 

 

