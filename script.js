function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form element
  var form = document.getElementById("wheelForm");

  // Access the form data
  var formData = new FormData(form);

  // Convert form data to JSON
  var jsonData = {};
  for (var pair of formData.entries()) {
    jsonData[pair[0]] = pair[1];
  }

  // Display the form data in the console
  console.log(jsonData);

  // Send form data to your server's API endpoint
  sendToServer(jsonData);

  // Clear the form fields
  form.reset();

  return false; // Prevent form submission
}

// Send form data to your server's API endpoint
function sendToServer(formData) {
  axios
    .post('/api/openai', formData)
    .then(function(response) {
      // Handle the API response from your server
      console.log('Server response:', response.data);
    })
    .catch(function(error) {
      // Handle errors
      console.error('Error:', error);
    });
}

// Debugging statements
console.log('Script loaded.');