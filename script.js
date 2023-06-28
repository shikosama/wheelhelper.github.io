function submitForm(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the form element
  var form = document.getElementById("wheelForm");
  
  // Access the form data
  var formData = new FormData(form);
  
  // Display the form data in the console
  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
  
  // You can perform additional processing or send the form data to a server here
  
  // Clear the form fields
  form.reset();
}


// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(form); // Get form data

    // Create an object to store the wheel data
    const wheelData = {};

    // Iterate over the form data and store the values in the wheelData object
    for (const [key, value] of formData.entries()) {
        wheelData[key] = value;
    }

    // Call the function to process the wheel data
    processWheelData(wheelData);
}

// Function to process the wheel data
function processWheelData(wheelData) {
    // Display the suggested numbers in the result container
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';

    let suggestedNumbers = '';
    for (const key in wheelData) {
        const value = wheelData[key];
        if (key.includes('_number')) {
            suggestedNumbers += value + ', ';
        }
    }
    suggestedNumbers = suggestedNumbers.slice(0, -2); // Remove the trailing comma and space

    console.log('Wheel Data:', wheelData); // Debug statement

    resultContainer.textContent = 'Suggested Numbers: ' + suggestedNumbers;
}

// Debugging statements
console.log('Script loaded.');