let monthlyPayment = '';
let values = {};

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  // getCurrentUIValues();
  if (form) {
    setupIntialValues();
    getCurrentUIValues();
    calculateMonthlyPayment(values);
    update();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      getCurrentUIValues();
      calculateMonthlyPayment(values);
      update();
    });
  }
});

function getCurrentUIValues() {
 
    values.amount = (document.getElementById("loan-amount").value);
    values.years = (document.getElementById("loan-years").value);
    values.rate = (document.getElementById("loan-rate").value);
  
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
 let loanAmnt = document.querySelector('#loan-amount') ;
 loanAmnt.value = 10000;
 let loanRate = document.querySelector('#loan-rate') ;
 loanRate.value = 10;
 let loanYears = document.querySelector('#loan-years') ;
 loanYears.value = 12;
 calculateMonthlyPayment(values);
 update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
 }


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.

function calculateMonthlyPayment(obj) {
  let p = obj.amount;
  let i = obj.rate / 100 / 12 ;
  let n = obj.years * 12;

  tempPayment = (p * i) / (1 - (Math.pow((1 + i),-n)));
  monthlyPayment = tempPayment.toFixed(2);
  
  // console.log(monthlyPayment.toFixed(2));
  return (monthlyPayment);
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  paymentDisplay = document.querySelector('#monthly-payment');
  paymentDisplay.innerText = `$${monthlyPayment}`;
}
