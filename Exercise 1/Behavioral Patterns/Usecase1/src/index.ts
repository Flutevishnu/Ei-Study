import { Book } from "./utils/Book";
import { BookCollection } from "./Iterator/BookIterator";

const library = new BookCollection();
library.addBook(new Book('1984', 'George Orwell'));
library.addBook(new Book('To Kill a Mockingbird', 'Harper Lee'));

const iterator = library.createIterator();
while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}