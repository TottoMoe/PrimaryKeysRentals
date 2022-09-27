const reviewFormHandler = async (event) => {
  event.preventDefault();

  const review = document.querySelector('textarea[name="review-body"]').value;

  await fetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify({
      review,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/homepage');
};

document
  .querySelector('#new-review-form')
  .addEventListener('submit', reviewFormHandler);
