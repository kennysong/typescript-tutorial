var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Book = (function () {
    function Book(title, isbn) {
        this.title = title;
        this.isbn = isbn;
    }
    return Book;
})();
var LibraryBook = (function (_super) {
    __extends(LibraryBook, _super);
    function LibraryBook(title, isbn) {
        _super.call(this, title, isbn);
        this._available = true;
    }
    Object.defineProperty(LibraryBook.prototype, "available", {
        get: function () { return this._available; },
        set: function (isAvailable) {
            console.log("\"" + this.title + "\" is now " + (isAvailable ? 'available' : 'unavailable'));
            this._available = isAvailable;
        },
        enumerable: true,
        configurable: true
    });
    return LibraryBook;
})(Book);
var Library = (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBooks = function () {
        var newBooks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newBooks[_i - 0] = arguments[_i];
        }
        (_a = this.books).push.apply(_a, newBooks);
        var _a;
    };
    Library.prototype.checkOut = function (book) {
        book.available = false;
    };
    Library.prototype.checkIn = function (book) {
        book.available = true;
    };
    Library.prototype.printBooks = function () {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            var title = book.title, isbn = book.isbn;
            console.log("Title: \"" + title + "\", ISBN: " + isbn);
        }
    };
    return Library;
})();
var bookA = new LibraryBook('Gödel, Escher, Bach: an Eternal Golden Braid', 9780465026562);
var bookB = new LibraryBook('Structure and Interpretation of Computer Programs', 9780262510875);
var library = new Library();
library.addBooks(bookA, bookB);
library.printBooks();
library.checkOut(bookA);
library.checkIn(bookA);
