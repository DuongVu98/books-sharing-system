import { Injectable } from "@nestjs/common";
import { UserService } from "src/book-system/Domains/repositories/user.service";
import { BookService } from "src/book-system/Domains/repositories/book.service";

@Injectable()
export class GetUserProfileInteractor {

    constructor(
        private userService: UserService,
        private bookService: BookService
    ){}

    getUserById(id: string){
        return this.userService.findUserById(id);
    }

    async getUserBooks(userId: string){
        const user = await this.userService.findUserById(userId);
        const books = user.books;

        return books;
    }
}