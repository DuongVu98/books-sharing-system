import { Controller, Get, Param } from "@nestjs/common";
import { GetUserBooksInteractor } from "src/book-system/Usecases/interactors/get-user-books.interactor";
import { Book } from "src/book-system/Domains/entities/book.entity";

@Controller("api/profile")
export class UserProfileController {
    constructor(private getUserBooksInteractor: GetUserBooksInteractor) {}

    @Get("posted-books/:userId")
    async getUserBooks(@Param("userId") userId: string): Promise<Book[]>{
        return await this.getUserBooksInteractor.getUserBooks(userId);
    }
}
