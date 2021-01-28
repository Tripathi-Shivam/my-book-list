// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: "Book One",
                author: "Shivam Tripathi",
                isbn: "656814",
            },
            {
                title: "Book Two",
                author: "John Doe",
                isbn: "434355",
            },
        ];

        const books = storedBooks;

        books.forEach((book) => {
            UI.addBookToList(book);
        });
    }

    static addBookToList(book) {
        const list = document.querySelector("#book-list");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(element){
        if(element.classList.contains("delete")){
            element.parentElement.parentElement.remove();
        }
    }
}

// Store Class: Handles Storage

// Event: Display Book (DOMContentLoaded: once the DOM is loaded)
document.addEventListener("DOMContentLoaded", UI.displayBooks);


