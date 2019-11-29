import { OrderService } from "src/book-system/Domains/repositories/order.service";
import { OrderTypeService } from "src/book-system/Domains/repositories/order-type.service";
import { OrderDTO } from "src/book-system/Domains/entities/order.entity";
import { UserService } from "src/book-system/Domains/repositories/user.service";
import { Injectable } from "@nestjs/common";
import { BookService } from "src/book-system/Domains/repositories/book.service";

@Injectable()
export class OrderBookInteractor {

    constructor(
        private orderService: OrderService,
        private orderTypeService: OrderTypeService,
        private userService: UserService,
        private bookService: BookService   
    ){}

    async orderBook(userId: string, bookId: string, orderTypeId: string, inputOrderData: OrderDTO){
        
        const user =  await this.userService.findUserById(userId);
        const book = await this.bookService.findBookById(bookId);
        const orderType = await this.orderTypeService.findOrderTypesById(orderTypeId);

        inputOrderData.book = book;
        inputOrderData.user = user;
        inputOrderData.orderType = orderType;

        return this.orderService.createOrder(inputOrderData);
    }
}