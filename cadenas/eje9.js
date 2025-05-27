// Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaa y muestra por pantalla, el día, el mes y el año. Adaptar el programa anterior para que también funcione cuando el día o el mes se introduzcan con un solo carácter.
const prompt = require("prompt-sync")(); // solo si estás en entorno Node.

let date = prompt("Enter the date (dd/mm/yyyy): ");

const parts = date.split("/");

if (parts.length === 3) {
    console.log(`day: ${parts[0]}, month: ${parts[1]} and year: ${parts[2]}`);
} else {
    console.log("Invalid format");
}
