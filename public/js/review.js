const reviewFormHandler = async (event) => {
  event.preventDefault();

  const vehicleId = document.querySelector('input[name="vehicle_id"]').value;
  const review = document.querySelector('textarea[name="review-body"]').value;

  if (review) {
    await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({
        vehicleId,
        review,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    document.location.reload();
  }
};

document
  .querySelector('#new-review-form')
  .addEventListener('submit', reviewFormHandler);
