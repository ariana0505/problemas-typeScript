const input = prompt("Enter your number in the format +xx-xxxxxxxxx-xx:");
const parts = input.split("-");

if (parts.length === 3) {
  const code = parts[2];
  console.log("Final code is:", code);
} else {
  console.log("Invalid format");
}
