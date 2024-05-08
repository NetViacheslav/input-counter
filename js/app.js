// Get access to input field:
const inputFieldElement = document.getElementById('input-chars');

// console.dir(inputFieldElement);
// Get access to <span class="remaining-chars">:
const remainingCharsElement = document.getElementById('remaining-chars');

// Add dinamic variable for maxLength property:
const maxAllowedChars = inputFieldElement.maxLength;

// Add listener to event:
inputFieldElement.addEventListener('input', (event) => {
    // Get access to value property in input field (event method):
    const enteredText = event.target.value;
    // Get access to value property in input field (NOT event method):
    // const enteredText = inputFieldElement.value;

    // Get the length of the entered text:
    const enteredTextLength = enteredText.length;

    // // Calculate the number of remaining characters:
    const remainingChars = maxAllowedChars - enteredTextLength;

    // Update the content text of the remainingCharsElement:
    remainingCharsElement.textContent = remainingChars;

    // Add condition for input field and span element in html:
    if (remainingChars <= 10) {
        remainingCharsElement.classList.add('warning');
        inputFieldElement.classList.add('warning');
    } else {
        remainingCharsElement.classList.remove('warning');
        inputFieldElement.classList.remove('warning');
    }
    // Alternative with use method toggle:
    // remainingCharsElement.classList.toggle('warning', remainingChars <= 10);
    // inputFieldElement.classList.toggle('warning', remainingChars <= 10);
});
