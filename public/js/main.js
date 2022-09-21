document.addEventListener("DOMContentLoaded", () =>{
  const loginForm = Document.querySelector("#login");
  const createAccountForm = Document.querySelector("#createAccount");


  document.querySelector("#linkCreateAccount").addEventListener("click", () =>{
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });


  document.querySelector("#linkLogin").addEventListener("click", () =>{
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });
});