
// Initial logic for calculating tip using ternary operator
const calcTip = (bill) => {bill >= 50 && bill <= 300 ? bill *0.15 : bill* 0.20; return tip;};

// Add output functionality to display bill, tip, and total
const displayBillTipTotal = (bill, tip) => {
    const total = bill + tip;
    console.log(`The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value is $${total.toFixed(2)}.`);
};

// Create and test calcTip function


// Test the function with a bill amount of $100
const billAmount = 100;
const tipAmount = calculateTip(billAmount);
console.log(`For a bill of $${billAmount}, the tip amount is $${tipAmount}.`); 
