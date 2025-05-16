const amount_to_invest = parseFloat(prompt("How much is the amount to invest?:"));
const annual_interest = parseFloat(prompt("Enter your annual interest (%):"));
const years = parseInt(prompt("How many years of interest?:"), 10);

const final_capital = amount_to_invest * ((1 + annual_interest / 100) ** years);

console.log(`Final capital: $${final_capital.toFixed(2)}`);
