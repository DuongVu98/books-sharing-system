import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Logger,
} from "@nestjs/common";
import { FindBookInteractor } from "src/book-system/Usecases/interactors/find-book.interactor";
import { GetBookDetailInteractor } from "src/book-system/Usecases/interactors/get-book-detail.interactor";
import { GetUserProfileInteractor } from "src/book-system/Usecases/interactors/get-user-profile.interactor";
import { Crud, CrudController } from "@nestjsx/crud";
import { UserService } from "src/book-system/Domains/repositories/user.service";
import { User } from "src/book-system/Domains/entities/user.entity";
import { BookDTO, Book } from "src/book-system/Domains/entities/book.entity";
import { AddBookInteractor } from "src/book-system/Usecases/interactors/add-book.interactor";
import { EditBookInteractor } from "src/book-system/Usecases/interactors/edit-book.interactor";

@Crud({
    model: {
        type: User,
    },
})
@Controller("api/user")
export class UserController implements CrudController<User> {
    constructor(
        public service: UserService,
        private readonly findBookInteractor: FindBookInteractor,
        private readonly getBookDetailInteractor: GetBookDetailInteractor,
        private readonly getUserProfileInteractor: GetUserProfileInteractor,
        private readonly addBookInteractor: AddBookInteractor,
        private readonly editBookInteractor: EditBookInteractor,
    ) {}

    @Get()
    userHome() {
        return "this is user api";
    }

    @Get("books-list")
    async getBookListForHomePage(): Promise<Book[]> {
        return this.findBookInteractor.getAllBooks();
    }

    @Get("search/:search")
    async findBooksBySearching(
        @Param("search") searchString: string,
    ): Promise<Book[]> {
        return this.findBookInteractor.getBooksBySearchString(searchString);
    }

    @Get("book/:id")
    getBookDetail(@Param("id") id: string) {
        return this.getBookDetailInteractor.getBookById(id);
    }

    @Get("profile/:userId")
    getUserProfileDetail(@Param("userId") id: string) {
        return this.getUserProfileInteractor.getUserById(id);
    }

    @Post("add-book")
    async addBook(@Body() bookData: BookDTO) {
        Logger.log(bookData);
        return this.addBookInteractor.addBook(bookData);
    }

    @Put("edit-book")
    editBook(@Body() bookData: BookDTO, id: string) {
        return this.editBookInteractor.updateBookChanges(id, bookData);
    }
}
