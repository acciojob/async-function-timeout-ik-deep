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
        await new Promise(resolve=> setTimeout(resolve, delayInMillis));

        // Display the text after the delay
        outputDiv.innerText = textInput;
    } catch (error) {
        console.error('Error occurred:', error);
        outputDiv.innerText = 'An error occurred.'+ error;
    }
}

// Attach event listener to the button
document.getElementById('btn').addEventListener('click', showMessage);

() => {
  const delay = 21000;
  const text = "Test - 1";

  cy.visit(baseUrl + "/main.html");

  // Ensure the output div is initially empty
  cy.get("div#output").should("be.empty");

  cy.get("input#text").type(text);
  cy.get("input#delay").type(delay);
  cy.get("button#btn").click();

  // Wait for the delay period
  cy.wait(delay);

  // Check the content of div#output after the delay
  cy.get("div#output").should("contain", text);
}


() => {
  const delay = 2000;
  const text = "Test - 2";

  cy.visit(baseUrl + "/main.html");

  // Ensure the output div is initially empty
  cy.get("div#output").should("be.empty");

  cy.get("input#text").type(text);
  cy.get("input#delay").type(delay);
  cy.get("button#btn").click();

  // Wait for the delay period
  cy.wait(delay);

  // Check the content of div#output after the delay
  cy.get("div#output").should("contain", text);
}

