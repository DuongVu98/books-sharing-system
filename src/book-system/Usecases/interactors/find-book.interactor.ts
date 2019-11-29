import { Injectable } from "@nestjs/common";
import { UserService } from "src/book-system/Domains/repositories/user.service";
import { BookService } from "src/book-system/Domains/repositories/book.service";
import { Book } from "src/book-system/Domains/entities/book.entity";

@Injectable()
export class FindBookInteractor {

    constructor(private userService: UserService, private bookService: BookService){}

    getAllBooks(){
        return this.bookService.findAllBooks();
    }

    async getBooksBySearchString(searchString: string): Promise<Book[]>{
        
        const booksByName = await this.bookService.findBooksByName(searchString);
        const booksByAuthor = await this.bookService.findBooksByAuthor(searchString);
        const booksByDepartment = await this.bookService.findBooksByDepartment(searchString);
        const booksByTag = await this.bookService.findBooksByTag(searchString);
        const booksByGenre = await this.bookService.findBooksByGenre(searchString);

        return booksByName.concat(booksByAuthor, booksByDepartment, booksByTag, booksByGenre);
    }

    findBooksByTitle(searchString: string): Promise<Book[]>{
        return this.bookService.findBooksByName(searchString);
    }

    findBooksByAuthor(searchString: string): Promise<Book[]>{
        return this.bookService.findBooksByAuthor(searchString);
    }

    findBooksByDepartment(searchString: string): Promise<Book[]>{
        return this.bookService.findBooksByDepartment(searchString);
    }

    findBooksByTag(searchString: string): Promise<Book[]>{
        return this.bookService.findBooksByTag(searchString);
    }

    findBooksByGenre(searchString: string): Promise<Book[]>{
        return this.bookService.findBooksByGenre(searchString);
    }
}