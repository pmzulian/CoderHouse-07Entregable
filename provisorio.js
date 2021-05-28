import { realpathSync, readFileSync } from "fs";

const ruta = "./07-desafio-entregable/productos.txt";

const archivo = JSON.parse(readFileSync(ruta, "utf-8"));
// console.log(archivo);

const productos = () => {
  try {
    return JSON.parse(readFileSync(ruta, "utf-8"));
  } catch (error) {
    return `Error de lectura ${error}`;
  }
};

const cantidad = productos().length;
console.log(cantidad);

const items = productos().map(element => element.title)
console.log(items);

const idRandom = Math.floor(Math.random() * (cantidad - 1 + 1)) + 1;
console.log(idRandom);
