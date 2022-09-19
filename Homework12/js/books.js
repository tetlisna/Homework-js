// 2. На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій при натисненні на кнопку надсилається
// асинхронний GET-запит на сервер, завантажується файл books.json і з нього виводяться всі назви авторів у вигляді списку на HTML-сторінку.

function downloadBooks() {
  let outputAuthors = document.querySelector('.authors');
  const ajaxReq = new XMLHttpRequest();
  ajaxReq.open ("GET", "books.json", true);

  ajaxReq.onreadystatechange = function () {
    if (ajaxReq.readyState != 4) return;
    if (ajaxReq.status != 200) {
        alert( 'Error: ' + ajaxReq.status + " " + ajaxReq.statusText);
        return;
    }
    let authors = ajaxReq.responseText;
    let authorsArr = JSON.parse(authors);
    let authors_html = '';

    for (let i = 0; i < authorsArr.length; i++) {
      let author = authorsArr[i].author;
      authors_html += `<br><li>${author}</li>`;
    }
    outputAuthors.innerHTML = `Authors:<br> ${authors_html}`;
    console.log(authors_html)
  }

    ajaxReq.send();
  }

document.querySelector(".books").addEventListener("click", () => downloadBooks());

