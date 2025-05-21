const bread = 3.49;
const bread_old = (bread * 60 / 100); 

const bread_for_client = parseInt(prompt("How many fresh breads? "), 10);
const bread_old_for_client = parseInt(prompt("How many old breads? "), 10);

const total = (bread_for_client * bread) + (bread_old_for_client * bread_old);

console.log(`The total check is: $${total.toFixed(2)}`);
