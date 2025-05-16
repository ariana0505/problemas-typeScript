const divisor = parseInt(prompt("Enter an integer: "), 10)
const dividend = parseInt(prompt("Enter the second integer: "), 10)

const quotient = (dividend/divisor).toFixed(2)
const remainder = dividend % divisor

console.log(`${dividend} divided by ${divisor} gives a quotient of ${quotient} and a remainder of ${remainder}`)