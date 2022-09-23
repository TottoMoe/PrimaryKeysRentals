document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login');
  const createAccountForm = document.querySelector('#createAccount');
  const signUpButton = document.querySelector('#linkCreateAccount');

  document
    .querySelector('#linkCreateAccount')
    .addEventListener('click', (e) => {
      e.preventDefault();
      signUpButton.classList.add('form-hidden');
      loginForm.classList.add('form-hidden');
      createAccountForm.classList.remove('form-hidden');
    });

  document.querySelector('#linkLogin').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('form-hidden');
    createAccountForm.classList.add('form-hidden');
  });
});
