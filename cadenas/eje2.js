function toTitleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
const full_name = prompt("What is your full name?: ")
console.log("Lowercase:", full_name.toLowerCase());
console.log("Uppercase:", full_name.toUpperCase());
console.log("Title Case:", toTitleCase(full_name));
