import express from 'express'

//Creamos el servidor con la función express importada
const app = express();

//Generamos la conexión con un puerto
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`Servidor escuchando en puerto ${puerto}`);
})

server.on("Error", error => console.log(`Error en el servidor ${error}`));

