document.getElementById('name').addEventListener('blur', validateName);
  document.getElementById('email').addEventListener('blur', validateEmail);
  document.getElementById('phone').addEventListener('blur', validatePhone);
  document.getElementById('message').addEventListener('blur', validateMessage);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,30}$/;

  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  } 
}

function validateMessage() {
  const message = document.getElementById('message');
  const re = /^[a-zA-Z0-9]$/;

  if(!re.test(message.value)) {
    message.classList.add('is-invalid');
  } else {
    message.classList.remove('is-invalid');
  }
}


// function Contact(name, email, phone, message) {
//   this.name = name;
//   this.email = email;
//   this.phone = phone;
//   this.message = message;
// }

// // UI constructor
// function UI() {}

// // Show Alert
// UI.prototype.showAlert = function(messages, className) {
  
//   // Create Div
//   const div = document.createElement('div');

//   // Add classes
//   div.className = `alert ${className}`;

//   // Add Text
//   div.appendChild(document.createTextNode(messages));

//   // Get Parent
//   const formContainer = document.querySelector('.form-container');

//   // Get form
//   const form = document.querySelector('#contact-form');

//   // Insert alert
//   formContainer.insertBefore(div, form);

//   // Time out after 3secs
//   setTimeout(function () {
//     document.querySelector('.alert').remove();
//   }, 3000);
// };

// // Clear Fields
// UI.prototype.clearFields = function() {
//   document.getElementById('name').value = '';
//   document.getElementById('email').value = '';
//   document.getElementById('phone').value = '';
//   document.getElementById('message').value = '';
// };

// // Event Listener for contact us
// document.getElementById('contact-form').addEventListener('submit', function(e) {
//   // Get form values
//   const name = document.getElementById('name').value,
//         email = document.getElementById('email').value,
//         phone = document.getElementById('phone').value,
//         message = document.getElementById('message').value;

//   // Instantiate contact
//   const contact = new Contact(name, email, phone, message);

//   // Instantiate UI
//   const ui = new UI();

//   // Validate
//   if (name === '' || email === '' || phone === '' || message === '') {
//     // Error Alert
//     ui.showAlert('Please fill in all fields', 'error');

//   } else {

//     // Send Contact
//     ui.sendDetails(contact);

//     // show success
//     ui.showAlert('Your message has been sent!', 'success');

//     // Clear fields
//     ui.clearFields();
//   }

//   e.preventDefault();
// }); 