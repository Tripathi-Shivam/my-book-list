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

    static deleteBook(element) {
        if (element.classList.contains("delete")) {
            element.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        //Vanish in 3 seconds
        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);
    }
}

// Store Class: Handles Storage

// Event: Display Book (DOMContentLoaded: once the DOM is loaded)
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
    // Prevent actuall submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("Please fill in all fields", "danger");
    } else {
        // Instantiate Book
        const book = new Book(title, author, isbn);
    
        // Add book to UI
        UI.addBookToList(book);
    
        // Show success message
        UI.showAlert("Book Added", "success");

        // Clear Fields
        document.getElementById("book-form").reset();
    }

});

//Event: Remove a Book
//(use event propogation, where we select something above it and we target whatever is clicked inside of it)
document.querySelector("#book-list").addEventListener("click", (e) => {
    UI.deleteBook(e.target);
    
    // Show success message
    UI.showAlert("Book Removed", "success");
});
