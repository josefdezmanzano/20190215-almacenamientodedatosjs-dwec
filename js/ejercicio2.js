
//reursos


var contador = 0;


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
            document.getElementById("resultado").innerHTML=element;
        
        }
    });
    

    
}