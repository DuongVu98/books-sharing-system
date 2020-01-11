import { Injectable } from "@nestjs/common";
import { BookService } from "src/book-system/Domains/repositories/book.service";
import { BookDTO } from "src/book-system/Domains/entities/book.entity";
import { UserService } from "src/book-system/Domains/repositories/user.service";

@Injectable()
export class AddBookInteractor {
    constructor(
        private bookService: BookService,
        private userService: UserService,
    ) {}

    async addBook(inputData: BookDTO) {
        await this.bookService.createBook(inputData).then(book => {
            this.userService.findUserById(inputData.userId).then(user => {
                user.books.concat(book);
                return book;
            });
        });
    }
}
