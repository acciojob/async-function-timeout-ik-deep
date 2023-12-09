// Function to display the message after a delay
async function showMessage() {
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerText = ''; // Clear previous content

    try {
        // Convert delayInput to milliseconds (assuming input is in seconds)
        const delayInMillis = delayInput * 1000;

        // Wait for the specified delay using setTimeout wrapped in a Promise
        await new Promise(resolve => setTimeout(resolve, delayInMillis));

        // Display the text after the delay
        outputDiv.innerText = textInput;
    } catch (error) {
        console.error('Error occurred:', error);
        outputDiv.innerText = 'An error occurred.';
    }
}

// Attach event listener to the button
document.getElementById('btn').addEventListener('click', showMessage);
