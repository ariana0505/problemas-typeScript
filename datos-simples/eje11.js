let amount = parseFloat(prompt("How much is the account amount?: "))
const interest = 0.4;

const first_year = amount * (1 + interest);
const second_year = first_year * (1 + interest);
const third_year = second_year * (1 + interest);


console.log(`The first year is :${first_year.toFixed(2)}`);
console.log(`The second year is :${second_year.toFixed(2)}`);
console.log(`The third year is :${third_year.toFixed(2)}`);