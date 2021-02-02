// const myRange = document.querySelector('.range--js');
// console.log(myRange.value);

function setOutputValue (input, output) {
    output.innerHTML = input.value;
}

const rangeInput = document.querySelector('.age-input--js');
const rangeOutput = document.querySelector('.age-output--js');

// set initital output value
setOutputValue(rangeInput,rangeOutput);

// set output value on slide
rangeInput.addEventListener("input", () => {
    setOutputValue(rangeInput,rangeOutput);
  });




