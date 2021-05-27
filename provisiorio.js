import fs from "fs";

const productos = () => {
    try {
        return JSON.parse(fs.readFileSync("productos.txt", "utf-8"));
    } catch (error) {
        return `Error de lectura ${error}`
    }
    
}
const cantidad = productos().length;
console.log(cantidad);

const items = productos().map(element => {
    return element.title 
});
console.log(items);

const idRandom = Math.floor(Math.random() * (cantidad - 1 + 1)) + 1;
console.log(idRandom);