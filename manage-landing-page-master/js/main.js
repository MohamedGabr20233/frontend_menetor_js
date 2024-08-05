const btnForm = document.getElementById('form_btn');

const inputEmail = document.getElementById('footer_form_email');

const labelErrFooter = document.getElementById('footer_form_err');

function checkTheValidity(data) {
   const dataArr = data.split('');
   let validation = dataArr.filter((el) => el === '@').length;

   if (validation === 1) {
      labelErrFooter.style.opacity = '0';
   } else {
      labelErrFooter.style.opacity = '1';
   }
}

btnForm.addEventListener('click', (e) => {
   e.preventDefault();
   inputEmail.focus();
   checkTheValidity(inputEmail.value);
});
inputEmail.addEventListener('keydown', (e) => {
   if (e.key === 'Enter') {
      checkTheValidity(inputEmail.value);
   }
});
