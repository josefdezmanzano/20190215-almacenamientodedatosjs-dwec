

if (typeof localStorage.getItem("contador")!== 'undefined') {
    // your code here
    document.getElementById("resultado").innerHTML = localStorage.getItem("contador");
    contador=localStorage.getItem("contador");
}else{

//reursos
var contador = 0;

  }


//escuchas

document.getElementById("btn_env").addEventListener("click", validaCampo, false);

function validaCampo() {
    let texto = document.getElementById("texto");
    let date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = "contador=" + contador + ";" + expires + ";path=/";
    if (texto.value == '') {
        contador++;
        let expires = "expires=" + date.toUTCString();
        document.cookie = "contador=" + contador + ";" + expires + ";path=/";
        informacionCookie();
    }else{
        document.cookie = "contador=0;" + expires + ";path=/";
        informacionCookie();
        contador=0;
    }

}
function informacionCookie() {

    let nombre = "contador";
    let recursos = decodeURIComponent(document.cookie);
    let arrayCookies = recursos.split(';');
    arrayCookies.forEach(element => {
        if (element.includes(nombre)) {

            element.replace("=", "");
            element.replace("contador", "");
            document.getElementById("resultado").innerHTML = element;
            //Web storage
           
            if (window.localStorage) {
                localStorage.setItem('contador', element.substring(element.indexOf("=")+1,element.length));
            } else {
                // No hay soporte de localStorage
            }
        }
    });



}
