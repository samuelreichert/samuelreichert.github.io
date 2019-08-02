// MyBookList
// Awesome app made without any JS framework
// from https://youtu.be/JaMCxVWtW58

// Book Class: represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks()
    books.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list')
    const row = document.createElement('tr')

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">&times;</a></td>
    `

    list.appendChild(row)
  }

  static deleteBook(el) {
    el.parentElement.parentElement.remove()
  }

  static showAlert(message, type) {
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')
    const div = document.createElement('div')
    div.className = `mt-4 alert alert-${type}`
    div.appendChild(document.createTextNode(message))

    container.insertBefore(div, form)

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000)
  }

  static clearFields(fields) {
    fields.forEach((field) => {
      field.value = ''
    })
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books = []

    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }

    return books
  }

  static addBook(book) {
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook(isbn) {
    const books = Store.getBooks()

    books.forEach((book, index) => {
      if (book.isbn, isbn) books.splice(index, 1)
    })

    localStorage.setItem('books', JSON.stringify(books))
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks())

// Event: Add a Book
document
  .querySelector('#book-form')
  .addEventListener('submit', (event) => {
    // Prevent actual submit
    event.preventDefault()

    // Get form fields
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const isbn = document.querySelector('#isbn')

    // Validate
    if (!title.value || !author.value || !isbn.value) {
      UI.showAlert('Please fill in all fields...', 'danger')

      // options: warning, error, success, info, and question
      Swal.fire('Oh no!', 'Please fill in all fields...', 'warning')
      return
    }

    // Instantiate book
    const book = new Book(title.value, author.value, isbn.value)

    // Add Book to Store
    Store.addBook(book)

    // Add Book to UI
    UI.addBookToList(book)

    // Show success message
    UI.showAlert('Book added successfully!', 'success')
    Swal.fire('Oh Yeaah!', 'Book added successfully!', 'success')

    // Cleat fields
    UI.clearFields([title, author, isbn])
  })

// Event: Remove a Book
document
  .querySelector('#book-list')
  .addEventListener('click', async (event) => {
    const element = event.target

    // Remove a book
    if (element.classList.contains('delete')) {
      // Remove Book from Store
      Store.removeBook(element.parentElement.previousElementSibling.textContent)

      // Remove Book from UI
      UI.deleteBook(element)

      // Show success message
      UI.showAlert('Book removed!', 'success')
      Swal.fire('Very Good', 'Book removed!', 'success')
    }
  })
