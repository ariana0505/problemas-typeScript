function toTitleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log("Lowercase:", full_name.toLowerCase());
console.log("Uppercase:", full_name.toUpperCase());
console.log("Title Case:", toTitleCase(full_name));
