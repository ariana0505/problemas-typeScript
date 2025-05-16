const working_hours = parseFloat(prompt("Number of hours worked: "));
const hour_cost = parseFloat(prompt("Cost per hour: "));

if (isNaN(working_hours) || isNaN(hour_cost)) {
  console.log("Invalid input. Please enter numeric values.");
} else {
  const pay = working_hours * hour_cost;
  console.log(`The total to pay is $${pay.toFixed(2)}`);
}
//Number.parseInt
//Para revisar si es numero es entero o no se utiliza Number.isInteger