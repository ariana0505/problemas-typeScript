// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.

const income = parseFloat(prompt("Enter your income: "))
let age = parseInt(prompt("Enter your age: "),10)
if((age >16)&&(income>= 1000)){
    console.log("I can pay taxes")
}else{
    console.log("you cannot pay taxes")
}