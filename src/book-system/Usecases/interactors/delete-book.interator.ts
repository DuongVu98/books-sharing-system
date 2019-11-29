import { BookService } from "src/book-system/Domains/repositories/book.service";

export class DeleteBookInterator {

    constructor(private bookService: BookService){}

    deleteBook(bookId: string){
        return this.bookService.deleteBookById(bookId);
    }
}