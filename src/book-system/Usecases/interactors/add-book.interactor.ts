import { Injectable } from "@nestjs/common";
import { BookService } from "src/book-system/Domains/repositories/book.service";
import { BookDTO } from "src/book-system/Domains/entities/book.entity";

@Injectable()
export class AddBookInteractor {

    constructor(private bookService: BookService){}

    addBook(inputData: BookDTO){
        return this.bookService.createBook(inputData);
    }
}