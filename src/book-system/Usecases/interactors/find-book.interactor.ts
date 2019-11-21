import { Injectable } from "@nestjs/common";
import { UserService } from "src/book-system/Domains/repositories/user.service";
import { BookService } from "src/book-system/Domains/repositories/book.service";
import { Book } from "src/book-system/Domains/entities/book.entity";

@Injectable()
export class FindBookInteractor {

    constructor(private userService: UserService, private bookService: BookService){}

    getAllBook(){
        return this.bookService.findAllBooks();
    }

    async getBookBySearchString(searchString: string): Promise<Book[]>{
        const booksByName = await this.bookService.findBooksByName(searchString);
        const booksByAuthor = await this.bookService.findBooksByAuthor(searchString);

        return booksByName.concat(booksByAuthor);
    }
}