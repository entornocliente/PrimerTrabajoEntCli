// AQUÍ TODAS LAS CLASES QUE CREEMOS

/*

* en principio no hay clases que requieran heredar



* necesario hacer un ojeto que contenga todas las canciones?
    todas las canciones deberían estar en un array o algo así, puede q un objeto,
    para poder buscar en todas. necesario algo que las contenga a todas
 */


// pedir cntinuamente que se introduzcan los valores adecuados o dar la opción de salir del bucle sin crear el objeto?,
// si se ha hecho el intento de crear objeto, este está en la memoria?, en tal caso cómo destruirlo?

// aquí sólo las validaciones
class Song{
    constructor(songName, artist, album, genre, year, rating, description) {

        this.songName = songName;
        this.description = description;
        this.genre = genre;
        this.artist = artist;
        this.album = album;
        this.rating = rating;
        this.year = year;

    }

        // MÉTODOS
    // SETTERS Y GETTERS
        // name
    getName(){
        return `${this.songName}`;
    }
    setName(songName){
        // aquí meter la misma validación que en el constructor
        this.songName = songName;
        if(typeof (songName) != "string" ){
            alert("debes meter cadena")
        }
    }

        // description
    getdescription(){
        return `${this.description}`;
        /* if(){
     typeof
        }*/
    }

    setdescription(description){
        this.description = description;
    }

        // genre
    getgenre(){
        return `${this.genre}`;
        /* if(){
     typeof
        }*/
    }

    setgenre(genre){
        this.genre = genre;
    }

        //artist
    getartist(){
        return `${this.artist}`;
        /* if(){
     typeof
        }*/
    }

    setartist(artist){
        this.artist = artist;
    }

        //album
    getalbum(){
        return `${this.album}`;
        /* if(){
     typeof
        }*/
    }

    setalbum(album){
        this.album = album;
    }

        //rating
    getrating(){
        return `${this.rating}`;
        /* if(){
     typeof
        }*/
    }
    setrating(rating){
        this.rating = rating;
    }

        // year
    getyear(){
        return `${this.year}`;
        /* if(){
     typeof
        }*/
    }
    setyear(year){
        this.year = year;
    }


        // VALIDACIONES
    // Debo validar cada uno de los campos de la canción (ni nulos, ni undefined ni vacíos)
    // validar que cada uno de los datos es correcto
        // COMPRIBAR ESTA PARTE
     /*

      // hacer validación mediante bucle, dando la opción de salir cuando se quiera y eliminando el objeto si no ha sido debidamente construido
            // validación por si creación de objeto con: let cancion1 = new Song(1);
            // validación  songName

      do {
                // no poner this.songName ni ponerlo entre paréntesis. Los paréntesis en el typeof cuando se está cogiendo una posición, por ejemplo
        if(typeof songName != "string" || !songName) { //
            // controlar que la cadena no esté vacía
            alert("debes meter cadena para nombre canción");
        } else {
            this.songName = songName;
        }

     songName = prompt("introduce el nombre de la canción");
        if(typeof songName === "number"){
            this.songName = songName.toString();
        }

        console.log(songName);
    } while (typeof songName != "string" || !songName);
    console.log(songName);

    // validación  description
    if(typeof description != "string") {
    alert("debes meter cadena para la descripción");
} else {
    this.description = description;
}
// validación  genre
if(typeof genre != "string") {
    alert("debes meter cadena para género");
} else {
    this.genre = genre;
}
// validación  artist
if(typeof artist != "string") {
    alert("debes meter cadena para artista");
} else {
    this.artist = artist;
}
// validación  album
if(typeof album != "string") {
    alert("debes meter cadena para album");
} else {
    this.album = album;
}
// validación  rating
if(typeof rating != "number" && rating <= 0 && rating > 5) {
    // podría comprobar con nan
    // no debe admitir ni 0 ni negativos ni decimales.
    // para controlar los decimales podría hacer un parse para convertirlo en cadena y si esta cadena ha recogido un , o un . pedir de nuevo
    alert("debes meter un número del 1 al 5");
} else {
    this.rating = rating;
}
// validación  year
if(typeof year != "string") {
    // controlar mediante expresión regular que se introduce una fecha en formato 31-10-17 y lo que esto recoja,
    // convertirlo a un formato fecha yo mismo si hace falta creando un objeto fecha, pero esto es lo menos importante.
    // debería controlar los días de los meses y los meses
    alert("debes meter fecha en formato **-**-****");
} else {
    this.year = year;
}*/



}

// creación de objetos de prueba
// por qué se pone en undefined el name?

// crear array para los géneros
let cancion1 = new Song("Orobroy","Dorantes", "Orobroy", "Flamenco",  "1998", 4, "Flamenco con piano");
let cancion2 = new Song("Hippaly","Hippaly", "El Surco Responde al Silencio", "Hip Hop instrumental",  "1997", 3, "En su versión con voz eran DPC & K");
let cancion3 = new Song("Turret Opera (A Cappella) [feat. Liz Baseman]","Acquire A Cappella", "Turret Opera (A Cappella) [feat. Liz Baseman] - Single", "BSO",  "2011", 4, "Banda sonora del juego portal 2");
let cancion4 = new Song("1 in 100,000","L-FRESH The LION", "Become", "Hip Hop",  "2016", 5, "Artista australiano");


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


/*

class User{

    userName = "";
    password = "";
}
*/

// desde el archivo html cargar el archivo js
