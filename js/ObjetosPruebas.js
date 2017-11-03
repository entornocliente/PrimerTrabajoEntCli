// creación de objetos de prueba
// por qué se pone en undefined el name?

// crear array para los géneros
let cancion1 = new Song("Orobroy","Dorantes", "Orobroy", nombreCompleto = ["David Fernández"] , "Flamenco",  "1998", 4, "Flamenco con piano");
let cancion2 = new Song("Hippaly","Hippaly", "El Surco Responde al Silencio", nombreCompleto = ["Francisco Benítez Benítez", "Jesús M. Carmona Cabrera", "Sergio Cano Ramírez", "Jorge Silva Gálvez"], "Hip Hop instrumental",  "1997", 3, "En su versión con voz eran DPC & K");
let cancion3 = new Song("Turret Opera (A Cappella) [feat. Liz Baseman]","Acquire A Cappella", "Turret Opera (A Cappella) [feat. Liz Baseman] - Single", nombreCompleto = ["No se sabe"], "BSO",  "2011", 4, "Banda sonora del juego portal 2");
let cancion4 = new Song("1 in 100,000","L-FRESH The LION", "Become", nombreCompleto = ["No se sabe"],  "Hip Hop",  "2016", 5, "Artista australiano");


// por qué cancion1 ahora no se muestra corectamente
console.log(cancion1); // esto funciona y muestra loa valores del objeto
// por qué ahora esto no me muestra el valor de name?, ¿cómo se hace un paso a paso en WS?
console.log(cancion1.getName());

// settear nombre
/*cancion1.setName(1);
cancion1.setName("");
cancion1.setName("lalala");*/

console.log(cancion2);
console.log(cancion3);
console.log(cancion4);