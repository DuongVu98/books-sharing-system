import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from './Domains/entities/user.entity';
import { Book } from './Domains/entities/book.entity';
import { UserController } from './Adapters/controllers/user.controller';
import { UserService } from './Domains/repositories/user.service';
import { BookService } from './Domains/repositories/book.service';
import { FindBookInteractor } from './Usecases/interactors/find-book.interactor';
import { GetBookDetailInteractor } from './Usecases/interactors/get-book-detail.interactor';
import { GetUserProfileInteractor } from './Usecases/interactors/get-user-profile.interactor';
import { Rating } from './Domains/entities/rating.entity';
import { Comment } from './Domains/entities/comment.entity';

@Module({
    imports: [
		TypeOrmModule.forFeature([User, Book, Rating, Comment])
	],
    controllers: [
		UserController
	],
	providers: [
		UserService,
		BookService,
		FindBookInteractor,
		GetBookDetailInteractor,
		GetUserProfileInteractor
	]
})
export class BookSystemModule {}
