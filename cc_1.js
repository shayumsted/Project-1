
// Initial logic for calculating tip using ternary operator
const calcTip = (bill) => { const tip= bill >= 50 && bill <= 300 ? bill *0.15 : bill* 0.20; return tip;};

// Add output functionality to display bill, tip, and total
const displayBillDetails = (bill, tip) => {
    const total = bill + tip;
    console.log(`The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value is $${total.toFixed(2)}.`);
};

// Create and test calcTip function
console.log("Test the function with a bill amount of $100");
const testBill = 100;
const tipAmount = calcTip(testBill);
displayBillDetails(testBill, tipAmount)
console.log(`For a bill of $${testBill}, the tip amount is $${tipAmount}.`); 

// Implement and populate arrats for bills, tips, and totals
const billsSet1 = [275, 40, 430];
const tipsSet1 = billsSet1.map(bill => calcTip(bill));
const totalsSet1 = billsSet1.map((bill, index) => bill + tipsSet1[index]);

console.log("Data Set 1:");
console.log("Bills:", billsSet1);
console.log("Tips:", tipsSet1);
console.log("Totals:", totalsSet1);

const billsSet2 = [125, 555, 44];
const tipsSet2 = billsSet2.map(bill => calcTip(bill));
const totalsSet2 = billsSet2.map((bill, index) => bill + tipsSet2[index]);

console.log("Data Set 2:");
console.log("Bills:", billsSet2);
console.log("Tips:", tipsSet2);
console.log("Totals:", totalsSet2); 