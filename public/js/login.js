const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const emailEl = document.querySelector('#email-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  // Send a POST request to the API endpoint
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the homepage page
    document.location.replace('/homepage');
  } else {
    alert('Failed to login');
  }
};

document.querySelector('#login').addEventListener('submit', loginFormHandler);
