let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);

  displayCalculation();

  localStorage.setItem('calculation', calculation);

}
// updateCalculation(value);

function displayCalculation() {
  document.querySelector('.myp').innerHTML = calculation;
}
