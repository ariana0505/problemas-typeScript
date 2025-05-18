const clownWeight = 122;
const dollWeight = 75;

const numberOfDolls = parseInt(prompt("How many dolls do you want?"), 10);
const numberOfClowns = parseInt(prompt("How many clowns do you want?"), 10);

if (isNaN(numberOfDolls) || isNaN(numberOfClowns)) {
    console.log("Please enter valid numbers.");
} else {
    const totalWeight = (numberOfClowns * clownWeight) + (numberOfDolls * dollWeight);
    console.log(`You ordered ${numberOfDolls} dolls and ${numberOfClowns} clowns. The total weight of the box is ${totalWeight} grams.`);
}
