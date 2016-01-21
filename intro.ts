class Book {
    constructor(public title: string, public isbn: number) {}
}

class LibraryBook extends Book {
    private _available = true;
    constructor(title: string, isbn: number) {
        super(title, isbn);
    }

    get available() { return this._available; }
    set available(isAvailable: boolean) {
        console.log(`"${this.title}" is now ${isAvailable ? 'available' : 'unavailable'}`);
        this._available = isAvailable;
    }
}

class Library {
    books: LibraryBook[] = [];
    addBooks(...newBooks: LibraryBook[]) { 
        this.books.push(...newBooks); 
    }
    checkOut(book: LibraryBook) { 
        book.available = false; 
    }
    checkIn(book: LibraryBook) { 
        book.available = true; 
    }
    printBooks() {
        for (var book of this.books) {
            let {title, isbn} = book;
            console.log(`Title: "${title}", ISBN: ${isbn}`);
        }
    }
}

var bookA = new LibraryBook('Gödel, Escher, Bach: an Eternal Golden Braid', 9780465026562);
var bookB = new LibraryBook('Structure and Interpretation of Computer Programs', 9780262510875);
var library = new Library();
library.addBooks(bookA, bookB);
library.printBooks();
library.checkOut(bookA);
library.checkIn(bookA);
