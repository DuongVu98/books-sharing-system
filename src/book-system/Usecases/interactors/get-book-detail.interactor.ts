import { Injectable } from "@nestjs/common";
import { BookService } from "src/book-system/Domains/repositories/book.service";

@Injectable()
export class GetBookDetailInteractor {
    constructor(
        private bookService: BookService
    ){}

    getBookById(id: string){
        return this.bookService.findBookById(id);
    }
}