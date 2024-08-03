const qrText = document.getElementById("qr-text"); // Get the input element for QR text by its ID
const sizes = document.getElementById("sizes"); // Get the select element for sizes by its ID
const generateBtn = document.getElementById("generateBtn"); // Get the button element to generate QR code by its ID
const downloadBtn = document.getElementById("downloadBtn"); // Get the button element to download QR code by its ID
const qrContainer = document.getElementById("qr-body"); // Get the div element to display the generated QR code by its ID

let size = sizes.value; // Initialize the size variable with the current value of the sizes select element

generateBtn.addEventListener("click", (e) => {
  // Add a click event listener to the generate button
  e.preventDefault(); // Prevent the default form submission behavior
  if (qrText.value.length > 0) {
    // Check if the input text is not empty
    generateQRCode(); // Call the function to generate QR code
  } else {
    alert("Enter the text or URL to generate your QR Code"); // Alert the user to enter text if the input is empty
  }
});

sizes.addEventListener("change", (e) => {
  // Add a change event listener to the sizes select element
  size = e.target.value; // Update the size variable with the new selected value
  generateQRCode(); // Call the function to generate QR code with the new size
});

function generateQRCode() {
  qrContainer.innerHTML = ""; // Clear the previous QR code from the container
  new QRCode(qrContainer, {
    // Create a new QRCode object
    text: qrText.value, // Set the text of the QR code from the input element
    width: parseInt(size), // Set the width of the QR code to the selected size
    height: parseInt(size), // Set the height of the QR code to the selected size
    colorDark: "#000000", // Set the dark color of the QR code
    colorLight: "#ffffff", // Set the light color of the QR code
  });
}
