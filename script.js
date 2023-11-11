//your JS code here. If required.
 async function delayAndShowText() {
      const textInput = document.getElementById('text');
      const delayInput = document.getElementById('delay');
      const outputDiv = document.getElementById('output');

      const text = textInput.value;
      const delayInSeconds = parseFloat(delayInput.value);

      if (!text || isNaN(delayInSeconds)) {
        alert('Please enter valid text and delay.');
        return;
      }

      outputDiv.innerHTML = ''; // Clear previous output

      // Using async/await to introduce delay
      await new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));

      // Show the text after the delay
      outputDiv.innerText =text;
    }

    const btn = document.getElementById('btn');
    btn.addEventListener('click', delayAndShowText);