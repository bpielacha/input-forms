
// copy <input type="range"> value into the textbox output
function setOutputValue (input, output) {
    output.innerHTML = input.value;
}

const rangeInput = document.querySelector('.age-input--js');
const rangeOutput = document.querySelector('.age-output--js');

// set initital output value
setOutputValue(rangeInput,rangeOutput);

// set output value on slide
rangeInput.addEventListener('input', () => {
    setOutputValue(rangeInput,rangeOutput);
  });


// enable/disable animalType <select> list
const animalsNumber = document.querySelector('.animalsNumber--js');
const animalType = document.querySelector('.animalType--js');

animalsNumber.addEventListener('input', () => {
    if (animalsNumber.value != 0) {
        animalType.disabled = false;
        animalType.classList.add('select--enabled');
    } else {
        animalType.disabled = true;
        animalType.classList.remove('select--enabled');
        animalType.selectedIndex = 0;
    }
});
