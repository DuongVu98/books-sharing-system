import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderType, OrderTypeDTO } from "../entities/order-type.entity";
import { Repository } from "typeorm";
import { OrderDTO } from "../entities/order.entity";


@Injectable()
export class OrderTypeService {
    
    constructor(@InjectRepository(OrderType) private orderTypeRepository: Repository<OrderType>){
    }

    async findAllOrderTypes(){
        return await this.orderTypeRepository.find();
    }

    async findOrderTypesById(id: string){
        const orderType = await this.orderTypeRepository.findOne({where: id});
        if(!orderType){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return orderType;
    }

    async createOrderType(data: OrderTypeDTO){
        const orderType = await this.orderTypeRepository.create(data);
        await this.orderTypeRepository.save(orderType);

        return orderType;
    }

    async updateOrderById(id:string, data: Partial<OrderTypeDTO>){
        const orderType = await this.orderTypeRepository.findOne({where: id});
        if(!orderType){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        await this.orderTypeRepository.update(id, data);

        return orderType;
    }

    async deleteOrderTypeById(id: string){
        const orderType = await this.orderTypeRepository.findOne({where: id});
        if(!orderType){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        await this.orderTypeRepository.delete(id);

        return orderType;
    }

}