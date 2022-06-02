const menu = document.querySelector('[data-toggle="toggleMenu"]')

menu.addEventListener('click', (e) => {
    const activeMenu = document.querySelector('[data-toggle="active"]')
    activeMenu.classList.toggle('dados')
    activeMenu.classList.toggle('dados-off')
    menu.classList.toggle('checked')
})

// horascopy-windows/js/index.js
function showTimer() {
    'use strict'; // entendi a utilização do use strict
    let myDiv = document.getElementById("history"),
        date = new Date(),
        year = date.getUTCFullYear(), // aqui eu poderia ter utilizado  *** destruction js es6 ? ***
        month = date.getUTCMonth(), // aqui eu poderia ter utilizado  *** destruction js es6 ? ***
        day = date.getUTCDate(); // aqui eu poderia ter utilizado  *** destruction js es6 ? ***

    // aqui eu poderia ter utilizado ternário? 
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    myDiv.textContent = day + "/" + month + "/" + year;
    // aqui eu poderia ter passado para innerHTML, mas não passei acho que o content ficou melhor. *** PESQUISAR AS DIFERENÇAS NO DOM ***
}
function myTimer() {
    let date = new Date();
    document.getElementById("time").textContent = date.toLocaleTimeString(); // *** ver com buscar somente hora e minuto ***
}
showTimer();

setInterval(myTimer, 1000)





// abertura de progamas.. aqui eu pesquisei na internet se era possível fazer isso


