import express from 'express'
import fs from 'fs';

//Creamos el servidor con la función express importada
const app = express();

//Generamos la conexión con un puerto
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`Servidor escuchando en puerto localhost:${puerto}`);
})

server.on("Error", error => console.log(`Error en el servidor ${error}`));


app.get("/", (peticion, respuesta) => {
    console.log("Petición recibida");
    respuesta.send("Mensaje de respuesta directorio raíz");
})

// const ruta =
//   "C:\\Users\\pmzul\\OneDrive\\Documents\\CoderHouse-Node\\7. NPM e introducción a express\\07-desafio-entregable\\productos.txt";

const ruta = "./07-desafio-entregable/productos.txt";

const productos = () => {
  try {
    return JSON.parse(fs.readFileSync(ruta, "utf-8"));
  } catch (error) {
    console.log("Error al leer el archivo: " + error);
    return [];
  }
};

/**
 * Al hacer un map sobre la salida del método readFile, necesito añadir
 * un arreglo vacío en caso de error, porque si se produce, entra al bloque
 * catch y no tiene arreglo para aplicar el método map().
 */
const items = productos().map(element => element.title)
console.log(items);
const prod = productos();
const cantidad = productos().length;

let visitasItems = 0;
let visitasRandom = 0;

app.get("/items", (peticion, respuesta) => {
    console.log("Petición recibida");
    respuesta.json({items: items, cantidad: cantidad});
    console.log(visitasItems++)
});


app.get("/item-random", (peticion, respuesta) => {
    const idRandom = Math.floor(Math.random() * (cantidad));
    console.log(idRandom);
    respuesta.json({item: prod[idRandom]})
    console.log(visitasRandom++)
});

app.get("/visitas", (req, res) => {
    res.json({visitas:{items: visitasItems, cantidad: visitasRandom}})
})