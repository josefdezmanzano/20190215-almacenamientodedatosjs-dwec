if (window.localStorage.getItem("contador") == null || window.localStorage.getItem("contador") == undefined) {
    contador = 0;
}
contador = window.localStorage.getItem("contador");


function almacenaElemento() {

    if (window.localStorage) {

        //almacenamos un elemento
        let valor = document.getElementById("item").value;
        localStorage.setItem(contador, valor);
        contador++;
        let date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = "contador=" + contador + ";" + expires + ";path=/";

        let ul = document.getElementById("ul");
        let nuevoLi = document.createElement("li");
        ul.appendChild(nuevoLi);
        nuevoLi.innerHTML = valor;
    } else {
        // No hay soporte de localStorage
    }
}

function cargaElementos() {

    let recursos = decodeURIComponent(document.cookie);
    let arrayCookies = recursos.split(';');
    arrayCookies.forEach(element => {
        if (element.includes("contador")) {

            let auxelem = element.replace("=", "");
            aux2lem = auxelem.replace("contador", "");

        }

    });
    for (let i = 0; i < aux2lem; i++) {
        const element = window.localStorage.getItem(i);
        console.log(element);
        let ul = document.getElementById("ul");
        let nuevoLi = document.createElement("li");
        ul.appendChild(nuevoLi);
        nuevoLi.innerHTML = element;


    }
}

function borrarElementos() {
    let recursos = decodeURIComponent(document.cookie);
    let arrayCookies = recursos.split(';');
    arrayCookies.forEach(element => {
        if (element.includes("contador")) {

            let auxelem = element.replace("=", "");
            aux2lem = auxelem.replace("contador", "");

        }

    });
    for (let i = 0; i < aux2lem; i++) {
        window.localStorage.removeItem(i);
        let ul = document.getElementById('ul');
        ul.innerHTML = '';
    }
}