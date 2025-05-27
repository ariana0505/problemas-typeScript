const productName = prompt("Enter the product name:");
const productCost = parseFloat(prompt("Enter the cost of the product:"));
const units = parseInt(prompt("Enter the quantity in units:"), 10);

const totalCost = productCost * units;

const formattedCost = productCost.toFixed(2).padStart(9, "0");
const formattedUnits = String(units).padStart(3, "0");
const formattedTotal = totalCost.toFixed(2).padStart(11, "0");

const result = `${productName} ${formattedCost} ${formattedUnits} ${formattedTotal}`;
console.log(result);