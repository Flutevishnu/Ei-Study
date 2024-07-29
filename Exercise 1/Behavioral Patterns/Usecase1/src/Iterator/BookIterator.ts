import { Iterator } from "../utils/Iterator";
import { Book } from "../utils/Book";

export class BookCollection {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    createIterator(): Iterator<Book> {
        return new BookIterator(this.books);
    }
}
class BookIterator implements Iterator<Book> {
    private position: number = 0;

    constructor(private books: Book[]) {}

    next(): Book {
        return this.books[this.position++];
    }

    hasNext(): boolean {
        return this.position < this.books.length;
    }

    current(): Book {
        return this.books[this.position];
    }
}