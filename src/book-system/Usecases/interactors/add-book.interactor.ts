import { Injectable, Logger } from "@nestjs/common";
import { BookService } from "src/book-system/Domains/repositories/book.service";
import {
    BookDTO,
    Book,
    BookDataRequest,
} from "src/book-system/Domains/entities/book.entity";
import { UserService } from "src/book-system/Domains/repositories/user.service";

@Injectable()
export class AddBookInteractor {
    constructor(
        private bookService: BookService,
        private userService: UserService,
    ) {}

    async addBook(inputData: BookDataRequest) {
        const user = await this.userService.findUserById(inputData.userId);
        const bookDto = await this.bookService.mapBookInputDataToBookDTO(
            inputData,
            user,
        );
        return await this.bookService.createBook(bookDto);
    }
}
