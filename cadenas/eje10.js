// Escribir un programa que pregunte por consola por los productos de una cesta de la compra, separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.

let shoppingBasket = prompt("Enter the list of products separated by commas: ").trim()
if (shoppingBasket.includes(",")){
    const message = shoppingBasket.split(",").join("\n")
    console.log(`${message}`)
}else{
    console.log("invalid format")
}