import { Injectable } from "@nestjs/common";
import { BookService } from "src/book-system/Domains/repositories/book.service";
import { BookDTO } from "src/book-system/Domains/entities/book.entity";

@Injectable()
export class EditBookInteractor {
    
    constructor(private bookService: BookService){}

    updateBookChanges(id: string, expectedChange: BookDTO){
        return this.bookService.updateBookById(id, expectedChange);
    }
}