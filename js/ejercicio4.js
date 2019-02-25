//comporbamos que soporta
let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
if (!indexedDB){
    console.log("No soportada");
}
//abrimos la base de datos

var request = window.indexedDB.open("db1", 1);

//evento de error
request.onerror = function (event) {
  console.log('The database is opened failed');
};


//Evento actualizado
var db;

request.onupgradeneeded = function (event) {
  db = event.target.result;
}


//evento de logrado si no ha habido problemas
var db;

request.onsuccess = function (event) {
  db = request.result;
  console.log('The database is opened successfully');
};



function aniadirItemTabla1() {
  const dbName = "the_name";

  var request = indexedDB.open(dbName, 2);
  
  request.onerror = function(event) {
    // Manejar errores.
  };
  request.onupgradeneeded = function(event) {
    var db = event.target.result;
  
    // Se crea un almacén para contener la información de nuestros cliente
    // Se usará "ssn" como clave ya que es garantizado que es única
    var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
  
    // Se crea un índice para buscar clientes por nombre. Se podrían tener duplicados
    // por lo que no se puede usar un índice único.
    objectStore.createIndex("name", "name", { unique: false });
  
    // Se crea un índice para buscar clientespor email. Se quiere asegurar que
    // no puedan haberdos clientes con el mismo email, asi que se usa un índice único.
    objectStore.createIndex("email", "email", { unique: true });
  
    // Se usa transaction.oncomplete para asegurarse que la creación del almacén 
    // haya finalizado antes de añadir los datos en el.
    objectStore.transaction.oncomplete = function(event) {
      // Guarda los datos en el almacén recién creado.
      var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
      for (var i in customerData) {
        customerObjectStore.add(customerData[i]);
      }
    }
  };
}


function aniadirItemTabla2(params) {

}


