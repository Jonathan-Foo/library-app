const openModalButton = document.querySelectorAll('[data-modal-target]')
const overlay = document.querySelector('[data-close-area]')

// MODAL FEATURE - POP-UP
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
}

// BOOK FEATURES - READINIG STATUS AND REMOVE BOOK
const readStatusBtn = document.querySelectorAll('.readingStatusBtn')
const removeBtn = document.querySelector('.removeBtn')

readStatusBtn.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('notRead')
    })
})



let myLibrary = []

function Book(title, author, numberOfPages, readingStatus) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.readingStatus = readingStatus
}

Book.prototype.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.readingStatus}.`)
} 

function addBookToLibrary(book) {
    return myLibrary.push(book)
}
 
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')

console.log(myLibrary)
// theHobbit.info()
// console.log(theHobbit.title)





