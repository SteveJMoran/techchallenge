// 1. Create a Tip calcuator function that takes in three things: 
// 1) meal price, 2) Tax Rate 3) Tip Rate. 
// It should return a value which you can console.log. 
// Have the function default to 13% tax and 15% tip. 
// Make the function return a string formatted $x.xx. 
//(please use ES6 for this!)

class tipCalculator {
  constructor ( tipRate, taxRate ){
    // set default tip rate and tax rate
    this.tipRate = tipRate || 0.15
    this.taxRate = taxRate || 0.13
  }
  printRecipt(meal) {
    // store values as cents
    let mealTotal = meal * 100;
    let taxTotal = (mealTotal * this.taxRate);
    let tipTotal = (mealTotal * this.tipRate);
    let grandTotal = mealTotal + taxTotal + tipTotal;
    // format recipt output
    let receipt = `
      Meal .............. ${ this.formatCurrency(mealTotal) }
      Tax(${this.formatPercentage(this.taxRate)}) .......... ${ this.formatCurrency(taxTotal) }
      Tip(${this.formatPercentage((this.tipRate))}) .......... ${ this.formatCurrency(tipTotal) }
      
      Total ............. ${this.formatCurrency( grandTotal) }`

    return receipt;
  }
  formatCurrency(amt){
    // return cents to dollars
    amt = parseFloat(amt / 100).toFixed(2);
    return `$${amt}`
  }
  formatPercentage(percentage) {
    percentage = parseFloat(percentage * 100);
    let formatted = `${percentage}%`
    return formatted;
  }
}
/// Show Answer
function showAnswer1() {
  // examples
  let calculator = new tipCalculator();
  let receipt = calculator.printRecipt(54.45);
  console.log("Default Settings");
  console.log(receipt);
}
function showAnswer1tip() {
  // Higher Tip
  let calcuator = new tipCalculator(0.18);
  let receipt = calcuator.printRecipt(54.45);
  console.log("Higher Tip");
  console.log(receipt);
}
function showAnswer1BC() {
  // BC Tax
  let calcuator3 = new tipCalculator();
  calcuator3.tipRate = 0.12;
  let receipt3 = calcuator3.printRecipt(54.45);
  console.log("BC Tax (12% HST)");
  console.log(receipt3);
}
document.querySelector("#showAnswer1").addEventListener('click', showAnswer1);
document.querySelector("#showAnswer1tip").addEventListener('click', showAnswer1tip);
document.querySelector("#showAnswer1BC").addEventListener('click', showAnswer1BC);

