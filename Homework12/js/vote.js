// 1. На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій при натисненні на кнопку надсилається асинхронний GET-запит
// на сервер, сервер обробляє запит і надсилає його на HTML-сторінку оновлюючи вміст кнопки так як показано в прикладі.
function voteClick() {
  const ajaxReq = new XMLHttpRequest();
  ajaxReq.open ("GET", "http://localhost:5000", true);
  ajaxReq.send();

  ajaxReq.onload = function () {
    if (ajaxReq.status != 200) { 
        alert( 'Error: ' + ajaxReq.status);
        return;
    }
    let responseObj = ajaxReq.responseText;
    // let voteVal = document.querySelector(".vote").value;
    document.querySelector("#vote").value = responseObj;

    console.log(responseObj);
  }
}

document.querySelector(".vote").addEventListener("click", () => voteClick());


