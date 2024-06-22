'using strict';
// calling elements
//? the input elements
const inputField = document.querySelectorAll('.input_area-field');

//? the button
const button = document.querySelector('.arrow_icon');

//clear the un-numeric characters
inputField.forEach(function (field) {
  field.addEventListener('keydown', function (e) {
    if (
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'Tab' ||
      e.key === '-' ||
      e.key === 'Enter'
    ) {
      return;
    }

    // Prevent non-numeric characters
    if (e.key < '0' || e.key > '9') {
      e.preventDefault();
    }
  });
});

//the error message

button.addEventListener('click', function (e) {
  inputField.forEach((field) => {
    //   calling the error messages;
    const inputFieldError = field.nextElementSibling;
    //calling the header for the error
    const headerError = field.previousElementSibling;

    // empty error message

    field.id === 'day' && (isNaN(field.value) || field.value <= 0 || field.value > 31)
      ? field.setAttribute('error', 'true')
      : field.id === 'month' && (isNaN(field.value) || field.value <= 0 || field.value > 12)
      ? field.setAttribute('error', 'true')
      : field.id === 'year' && (isNaN(field.value) || field.value >= new Date().getFullYear() || field.value <= 0)
      ? field.setAttribute('error', 'true')
      : field.setAttribute('error', 'false');

    if (field.getAttribute('error') === 'true') {
      field.style.borderColor = 'hsl(0, 100%, 67%)';
      headerError.style.color = 'hsl(0, 100%, 67%)';
      inputFieldError.style.opacity = '1';
      inputFieldError.innerHTML = ` must be a valid ${field.id}`;

      if (field.id === 'year') {
        inputFieldError.innerHTML = `must be a past ${field.id}`;
      }
      if (field.value === '') {
        inputFieldError.innerHTML = `this field is required`;
      }
    } else {
      field.setAttribute('error', 'false');
      field.style.borderColor = 'hsl(259, 100%, 65%)';
      headerError.style.color = 'hsl(0, 1%, 44%)';
      inputFieldError.style.opacity = '0';
    }
  }); //make sure that all fields are valid to start calculating
  //collection the data
  //? the output-text
  const resultYear = document.getElementById('result_years');
  const resultMonth = document.getElementById('result_months');
  const resultDay = document.getElementById('result_days');
  //////////////////////////////////////////////////////////
  //transfer the fields nodeList to Array
  const arrfields = Array.from(inputField);

  let alltrue = arrfields.every((field) => field.getAttribute('error') === 'false');
  if (alltrue === true) {
    //start calculating
    let yearNow = new Date().getFullYear();
    let monthNow = new Date().getMonth() + 1;
    let dayNow = new Date().getDate();

    const yearInput = document.getElementById('year').value;
    let monthInput = document.getElementById('month').value;
    const dayInput = document.getElementById('day').value;

    if (monthNow < monthInput && dayNow < dayInput) {
      resultYear.innerHTML = `${yearNow - yearInput - 1}`;
      resultMonth.innerHTML = `${(monthNow - monthInput) * -1}`;
      resultDay.innerHTML = `${dayNow - dayInput} `;
    }
    else if (monthNow < monthInput) {
       
      resultYear.innerHTML = `${yearNow - yearInput - 1}`;
      resultMonth.innerHTML = `${(monthNow - monthInput)  + 12}`;
      resultDay.innerHTML = `${dayNow - dayInput} `;
    }
     else if (dayNow == dayInput && monthNow == monthInput) {
      resultYear.innerHTML = `${yearNow - yearInput}`;
      resultMonth.innerHTML = `${(monthNow - monthInput) * -1}`;
      resultDay.innerHTML = `${(dayNow - dayInput) * -1} `;
    } else {
      resultYear.innerHTML = `${yearNow - yearInput}`;
      resultMonth.innerHTML = `${monthNow - monthInput}`;
      resultDay.innerHTML = `${dayNow - dayInput} `;
    }
  }
});

console.log(new Date().getDate());
