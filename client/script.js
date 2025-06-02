// Select the form
const form=document.getElementById('contact');

//// Listen for form submission

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  // Get input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Output the result
  const output = document.getElementById('output');
  output.textContent = `Thank you, ${name}! We received your message.`;

  // Optional: Clear the form
  form.reset();
});