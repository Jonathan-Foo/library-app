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
theHobbit.info()
console.log(theHobbit.title)
