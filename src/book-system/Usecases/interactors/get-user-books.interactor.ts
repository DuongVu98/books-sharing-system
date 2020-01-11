import { Injectable } from "@nestjs/common";
import { BookService } from "src/book-system/Domains/repositories/book.service";
import { UserService } from "src/book-system/Domains/repositories/user.service";
import { Book } from "src/book-system/Domains/entities/book.entity";

@Injectable()
export class GetUserBooksInteractor {
    constructor(private bookService: BookService,private userApiService: UserService){}

    async getUserBooks(userId: string): Promise<Book[]>{
        const user = await this.userApiService.findUserById(userId);
        return await this.bookService.findBooksByUser(user);
    }
}