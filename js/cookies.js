function verCookie() {
    let nombre=prompt("Inserta el nombre de la cookie:");
    let recursos=decodeURIComponent(document.cookie);
    let arrayCookies=recursos.split(';');
    arrayCookies.forEach(element => {
        if (element.includes(nombre)) {

            alert("El valor de la cookie usuario "+element.replace("="," es "));    
        }
        

    });
}
function crearCookie() {

    let nombre = prompt("Escribe tu nombre de usuario:");
    let valor = prompt("Escribe el valor de la cookie:");
    let expiracion = prompt("¿Cuando quieres que expire? escribelo en dias");
    let date = new Date();
    date.setTime(date.getTime() + (expiracion * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";

}
function borrarCookie() {

}