const phrase = prompt("Enter phrase: ");
const words = phrase.split(" ").reverse();
const new_phrase = words.join(" ");
console.log(new_phrase);
