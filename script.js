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

  // Send form data to OpenAI API
  sendToOpenAI(jsonData);

  // Clear the form fields
  form.reset();

  return false; // Prevent form submission
}

// Send form data to OpenAI API
function sendToOpenAI(formData) {
  // Replace 'YOUR_API_KEY' with your actual OpenAI API key
  var apiKey = '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';

  // Replace 'YOUR_MODEL_ID' with the model ID you want to use
  var modelId = 'gpt-3.5-turbo';

  // Define the OpenAI API endpoint
  var apiUrl = 'https://api.openai.com/v1/engines/' + modelId + '/completions';

  // Prepare the data to send
  var requestData = {
    prompt: 'The submitted form data is: ' + JSON.stringify(formData),
    max_tokens: 50
  };

  // Make the API request
  axios
    .post(apiUrl, requestData, {
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      // Handle the API response
      console.log('OpenAI response:', response.data.choices[0].text);
    })
    .catch(function(error) {
      // Handle errors
      console.error('Error:', error);
    });
}

// Debugging statements
console.log('Script loaded.');
