// MODAL FEATURE - POP-UP
const openModalButton = document.querySelectorAll('[data-modal-target]')
const overlay = document.querySelector('[data-close-area]')

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
        const modal = document.querySelector('.new-book-prompt')
        closeModal(modal)
    })


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    clearModal()
}

function clearModal() {
    const inputs = [...modal.querySelectorAll('input')]
    inputs.forEach(input => input.value = '')
}

// BOOK FEATURES - READINIG STATUS AND REMOVE BOOK

function removeBook() {
    const cardSection = document.querySelector('.card-section')
    const removeBtn = document.querySelectorAll('.removeBtn')
    removeBtn.forEach(button => {
        button.addEventListener('click', () => {
            let index = parseInt(button.dataset.removeTarget)
            myLibrary.splice(index, 1)
            cardSection.innerHTML = ''
            displayBook(myLibrary)
        })
    })
}

function toggleColor() {
    const readStatusBtn = document.querySelectorAll('.readingStatusBtn')
    readStatusBtn.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('notRead')
        })
    })
}

// FORM
const modal = document.querySelector('.new-book-prompt')
const inputs = [...modal.querySelectorAll('input')]
const submitBtn = modal.querySelector('button')

let myLibrary = []

function Book(title, author, numberOfPages, readingStatus) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    if (readingStatus == false) {
        this.readingStatus = 'notRead'
    } else {
        this.readingStatus = ' '
    }
    
}

Book.prototype.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.readingStatus}.`)
} 

function addBookToLibrary(book) {
    return myLibrary.push(book)
}


// FUNCTION FOR LOOPING ARRAY AND DISPLAYING NEW BOOKS

function displayBook(arr) {
    const cardSection = document.querySelector('.card-section')
    
    arr.forEach((obj, index) => {
        let card = 
        `<div class="card">
        <p id="title">${obj.title}</p>
        <p id="author">${obj.author}</p>
        <p id="pages">${obj.numberOfPages} pages</p>
        <button onclick="toggleColor()" class="readingStatusBtn ${obj.readingStatus}"></button>
        <button onclick="removeBook()" data-remove-target='${index}' class="removeBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </button>
      </div>`

    return cardSection.innerHTML += card

    })
        
}

// FUNCTION TRIGGERED WHEN USER SUBMIT MODAL INFO

function addNewBook() {
    const cardSection = document.querySelector('.card-section')
    let newBookInfo = inputs.map(function(input) {return input.type === 'checkbox' ? input.checked : input.value})
    if (inputs.every(input => input.validity.valid !== false)) {
        addBookToLibrary(new Book(...newBookInfo))
        cardSection.innerHTML = ''
        displayBook(myLibrary)
        closeModal(modal)
    } else {
        modal.reportValidity()
        return  
    }
}

submitBtn.addEventListener('click', () => addNewBook())







