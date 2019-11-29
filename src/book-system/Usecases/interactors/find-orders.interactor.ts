import { Injectable } from "@nestjs/common";
import { OrderService } from "src/book-system/Domains/repositories/order.service";

@Injectable()
export class FindOrdersInteractor {

    constructor(private orderService: OrderService){}

    findAllBookOrder(bookId: string){
        return this.orderService.findOrdersByBook(bookId);
    }

    findAllUserOrders(userId: string){
        return this.orderService.findOrdersByUser(userId);
    }
}