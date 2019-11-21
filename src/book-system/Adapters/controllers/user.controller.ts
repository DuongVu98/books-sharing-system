import { Controller, Get, Param } from "@nestjs/common";
import { FindBookInteractor } from "src/book-system/Usecases/interactors/find-book.interactor";
import { GetBookDetailInteractor } from "src/book-system/Usecases/interactors/get-book-detail.interactor";
import { GetUserProfileInteractor } from "src/book-system/Usecases/interactors/get-user-profile.interactor";
import { Crud, CrudController } from '@nestjsx/crud';
import { UserService } from "src/book-system/Domains/repositories/user.service";
import { User } from "src/book-system/Domains/entities/user.entity";

@Crud({
    model: {
        type: User
    }
})
@Controller('api/user')
export class UserController implements CrudController<User>{

    constructor(
        public service: UserService,
        private readonly findBookInteractor: FindBookInteractor,
        private readonly getBookDetailInteractor: GetBookDetailInteractor,
        private readonly getUserProfileInteractor: GetUserProfileInteractor
    ){}

    @Get()
    userHome(){
        return 'this is user api';
    }

    @Get('search/:search')
    findBooksBySearching(@Param('search') searchString: string){
        return this.findBookInteractor.getBookBySearchString(searchString);
    }

    @Get('book/:id')
    getBookDetail(@Param('id') id: string){
        return this.getBookDetailInteractor.getBookById(id);
    }

    @Get('profile/:userId')
    getUserProfileDetail(@Param('userId') id: string){
        return this.getUserProfileInteractor.getUserById(id);
    }
}