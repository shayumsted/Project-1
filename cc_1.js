
// Initial logic for calculating tip using ternary operator
const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill *0.15 : bill* 0.20;

// Test the function with a bill amount of $100
const billAmount = 100;
const tipAmount = calculateTip(billAmount);
console.log(`For a bill of $${billAmount}, the tip amount is $${tipAmount}.`);
