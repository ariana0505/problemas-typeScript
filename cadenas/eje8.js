const cost_product = prompt("Enter cost of the product in euros with two decimal places: ");

if (cost_product.split(".").length === 2) {
  const parts = cost_product.split(".");
  console.log(`The price is ${parts[0]} euros and ${parts[1]} cents`);
} else {
  console.log("Invalid format. Please enter the price with two decimal places (e.g., 12.34)");
}
