function calculate_BMI(weight, height) {
  return weight / (height ** 2);
}

const weight = parseFloat(prompt("Enter your weight in kilos: "));
const height = parseFloat(prompt("Enter your height in meters: "));

const bmi = calculate_BMI(weight, height);

console.log(`Your BMI is ${bmi.toFixed(2)}`);

