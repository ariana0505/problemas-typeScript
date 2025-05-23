const phrase = prompt("Enter a phrase: ").trim().toLowerCase();
const vowel = prompt("Enter a vowel: ").trim().toLowerCase();

if (["a", "e", "i", "o", "u"].includes(vowel)) {
    console.log(phrase.replace(vowel, vowel.toUpperCase()));
} else {
    console.log("That is not a valid vowel.");
}
