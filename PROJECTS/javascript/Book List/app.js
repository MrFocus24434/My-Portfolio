// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

// Add Book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  // create tr element
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
  `;

  // Append to the list
  list.appendChild(row);
  
}

// Show alert
UI.prototype.showAlert = function(message, className) {

  // Create div
  const div = document.createElement('div');

  // Add classes
  div.className = `alert ${className}`;

  // Add text
  div.appendChild(document.createTextNode(message));

  // Get parent
  const container = document.querySelector('.container');

  // Get form
  const form = document.querySelector('#book-form');

  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function(){

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}

// Event Listener for Add book
document.getElementById('book-form').addEventListener('submit', function(e){

  // Get form value
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    
    // Error alert
    ui.showAlert('Please fill in all field', 'error');
  } else {

    // Add book to list
  ui.addBookToList(book);

  // Show success
  ui.showAlert('Book Added', 'success');

  // Clear field
  ui.clearFields();

  }

  e.preventDefault();
});

// Even listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  
  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed', 'success');

  e.preventDefault();
});