let number = parseInt(prompt("Enter one number: "),10)
let numbers= [];
while(number>=1){
    if (number % 2 != 0){
        numbers.push(number);
    }
    number--;
}
console.log("Odd numbers: " + numbers.join(", "));
