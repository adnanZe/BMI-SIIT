// grab DOM
const inputWeight = document.getElementById('weight');
const inputHeight = document.getElementById('height');
const displayResult = document.getElementById('display-result');
const resetBtn = document.getElementById('reset');

// Events

inputWeight.addEventListener('input', updateValue);
inputHeight.addEventListener('input', updateValue);
resetBtn.addEventListener('click', resetValues)

// Functions

function updateValue() {
  let convertToCm = Number(inputHeight.value) / 100;
  let calculateBMI = (Number(inputWeight.value) / (Math.pow(convertToCm, 2)));
  displayResult.innerHTML = `
  Your <b>B</b>ody<b>M</b>ass<b>I</b>ndex is:<br> <span>${calculateBMI.toFixed(1)}</span><br><br>
  And you are:<br>
  <span id='classification'>${bmiClassification.correlalteBMI(calculateBMI)}</span>
  `;

};

function resetValues() {
  inputHeight.value = '';
  inputWeight.value = '';
  displayResult.textContent = '';
};

// Classification of BMI

let bmiClassification = {
  typeOfBodyMass: ['UNDERWEIGHT', 'Normal', 'OVERWEIGHT', 'OBESE', 'EXTREMELY OBESE'],
  correlalteBMI(bmiIndex) {
    return (bmiIndex < 18.5) ? this.typeOfBodyMass[0]
         : (bmiIndex >= 18.5 && bmiIndex < 25) ? this.typeOfBodyMass[1]
         : (bmiIndex >= 25 && bmiIndex < 30) ? this.typeOfBodyMass[2]
         : (bmiIndex >= 30 && bmiIndex < 35) ? this.typeOfBodyMass[3]
         : (bmiIndex >= 35) ? this.typeOfBodyMass[4]
         : 'Fill all input fields';
  }
}

