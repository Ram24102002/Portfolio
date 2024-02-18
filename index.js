// copy to clipboard


//number
  document.getElementById('numcopyButton').addEventListener('click', function() {
    // Create a textarea element
    var textarea = document.createElement('textarea');
    // Assign your phone number to the value of the textarea
    textarea.value = '+917305790119'; // Replace 'Your Phone Number' with your actual phone number
    // Append the textarea to the document body
    document.body.appendChild(textarea);
    // Select the text in the textarea
    textarea.select();
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    // Remove the textarea from the document body
    document.body.removeChild(textarea);
    // Alert the user that the phone number has been copied
    alert('Phone number copied to clipboard: ' + textarea.value);
  });


//mail
  // document.getElementById('copyButton').addEventListener('click', function() {
  //   // Create a textarea element
  //   var textarea = document.createElement('textarea');
  //   // Assign your phone number to the value of the textarea
  //   textarea.value = 'ramachandran24102002@outlook.com'; // Replace 'Your Phone Number' with your actual phone number
  //   // Append the textarea to the document body
  //   document.body.appendChild(textarea);
  //   // Select the text in the textarea
  //   textarea.select();
  //   // Copy the selected text to the clipboard
  //   document.execCommand('copy');
  //   // Remove the textarea from the document body
  //   document.body.removeChild(textarea);
  //   // Alert the user that the phone number has been copied
  //   alert('Mail ID copied to clipboard: ' + textarea.value);
  // });



//number in section

document.getElementById('numcpyBtn').addEventListener('click', function() {
  // Create a textarea element
  var textarea = document.createElement('textarea');
  // Assign your phone number to the value of the textarea
  textarea.value = '+917305790119'; // Replace 'Your Phone Number' with your actual phone number
  // Append the textarea to the document body
  document.body.appendChild(textarea);
  // Select the text in the textarea
  textarea.select();
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  // Remove the textarea from the document body
  document.body.removeChild(textarea);
  // Alert the user that the phone number has been copied
  alert('Phone number copied to clipboard: ' + textarea.value);
});



//mail in section

// document.getElementById('mcpyBtn').addEventListener('click', function() {
//   // Create a textarea element
//   var textarea = document.createElement('textarea');
//   // Assign your phone number to the value of the textarea
//   textarea.value = 'ramachandran24102002@outlook.com'; // Replace 'Your Phone Number' with your actual phone number
//   // Append the textarea to the document body
//   document.body.appendChild(textarea);
//   // Select the text in the textarea
//   textarea.select();
//   // Copy the selected text to the clipboard
//   document.execCommand('copy');
//   // Remove the textarea from the document body
//   document.body.removeChild(textarea);
//   // Alert the user that the phone number has been copied
//   alert('Mail ID copied to clipboard: ' + textarea.value);
// });