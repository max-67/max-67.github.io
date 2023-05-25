const animateSpinner = (input) => {
  const spinner = document.getElementById('circle');
  if (input.checked) {
    spinner.classList.add('svg-animate');
  } else {
    spinner.classList.remove('svg-animate');
  }
};

const hiddenSpinner = (input) => {
  const spinner = document.getElementById('svg');
  if (input.checked) {
    spinner.classList.add('svg-hide');
  } else {
    spinner.classList.remove('svg-hide');
  }
};

const spinnerValue = (input) => {
  // 314 = 2*pi*r
  if (input.value > 100) {
    input.value = 100;
  }

  if (input.value < 0) {
    input.value = 0;
  } 
  const value = 314 - (314 * input.value / 100);
  const spinner = document.getElementById('circle');
  spinner.style.setProperty('--percentage', value);
};

window.onload = () => {
  spinnerValue({value: 75})
};