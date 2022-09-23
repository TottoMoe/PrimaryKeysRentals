// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   // Collect values from the login form
//   const usernameEl = document.querySelector("#username-input-login");
//   const passwordEl = document.querySelector("#password-input-login");

//   // Send a POST request to the API endpoint
//   const response = await fetch("/api/users/login", {
//     method: "POST",
//     body: JSON.stringify({
//       username: usernameEl.value,
//       password: passwordEl.value,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     // If successful, redirect the browser to the dashboard page
//     document.location.replace("/dashboard");
//   } else {
//     alert("Failed to login");
//   }
// };

// document
//   .querySelector("#login-form")
//   .addEventListener("submit", loginFormHandler);
