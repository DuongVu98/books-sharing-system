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
import { AddBookInteractor } from './Usecases/interactors/add-book.interactor';
import { AddCommentInteractor } from './Usecases/interactors/add-comment.interactor';
import { EditBookInteractor } from './Usecases/interactors/edit-book.interactor';
import { EditCommentInteractor } from './Usecases/interactors/edit-comment.interactor';
import { OrderBookInteractor } from './Usecases/interactors/order-book.interactor';
import { FindOrdersInteractor } from './Usecases/interactors/find-orders.interactor';
import { CommentService } from './Domains/repositories/comment.service';
import { OrderService } from './Domains/repositories/order.service';
import { OrderTypeService } from './Domains/repositories/order-type.service';
import { DepartmentService } from './Domains/repositories/department.service';
import { Order } from './Domains/entities/order.entity';
import { OrderType } from './Domains/entities/order-type.entity';
import { Tag } from './Domains/entities/tag.entity';
import { Department } from './Domains/entities/department.entity';
import { Genre } from './Domains/entities/genre.entity';

@Module({
    imports: [
		TypeOrmModule.forFeature([User, Book, Rating, Comment, Order, OrderType, Tag, Department, Genre])
	],
    controllers: [
		UserController
	],
	providers: [
		UserService,
		BookService,
		CommentService,
		OrderService,
		OrderTypeService,
		DepartmentService,
		FindBookInteractor,
		GetBookDetailInteractor,
		GetUserProfileInteractor,
		AddBookInteractor,
		AddCommentInteractor,
		EditBookInteractor,
		EditCommentInteractor,
		OrderBookInteractor,
		FindOrdersInteractor
	]
})
export class BookSystemModule {}
