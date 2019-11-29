import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order, OrderDTO } from "../entities/order.entity";
import { Repository, getRepository } from "typeorm";

@Injectable()
export class OrderService {

    constructor(@InjectRepository(Order) private orderRepository: Repository<Order>){}

    async findAllOrders(){
        return await this.orderRepository.find();
    }

    async findOrderById(id: string){
        const order = await this.orderRepository.findOne({where: id});
        if(!order){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return order;
    }

    async findOrdersByBook(bookId: string){
        const orders = await getRepository(Order)
            .createQueryBuilder('order')
            .where('order.book_id = :id', {id: bookId})
            .getMany();
        
        return orders;
    }

    async findOrdersByUser(userId: string){
        const orders = await getRepository(Order)
            .createQueryBuilder('order')
            .where('order.user_id = :id', {id: userId})
            .getMany();
        
        return orders;
    }

    async createOrder(data: OrderDTO){
        const order = await this.orderRepository.create(data);
        await this.orderRepository.save(order);

        return order;
    }

    async updateOrderById(id: string, data: Partial<OrderDTO>){
        const order = await this.orderRepository.findOne({where: id});
        if(!order){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        await this.orderRepository.update(id, data);
        return order;
    }

    async deleteOrderById(id: string){
        const order = this.orderRepository.findOne({where: id});
        if(!order){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        await this.orderRepository.delete(id);
        return order;
    }
}