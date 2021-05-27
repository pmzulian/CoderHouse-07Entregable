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

const productos = () => {
  try {
    return JSON.parse(fs.readFileSync("productos.txt", "utf-8"));
  } catch (error) {
    return `Error de lectura ${error}`;
  }
};

const items = productos().map(element => element.title)
const prod = productos();
const cantidad = productos().length;

app.get("/items", (peticion, respuesta) => {
    console.log("Petición recibida");

    respuesta.json({items: items, cantidad: cantidad});
});


app.get("/item-random", (peticion, respuesta) => {
    const idRandom = Math.floor(Math.random() * (cantidad));
    console.log(idRandom);
    respuesta.json({item: prod[idRandom]})
});