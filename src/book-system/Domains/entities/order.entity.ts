import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Book } from "./book.entity";
import { OrderType } from "./order-type.entity";

@Entity('order')
export class Order {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => User, u => u.id)
    user: User;

    @ManyToOne(type => Book, b => b.id)
    book: Book;

    @Column({name: 'book_amount', type: 'integer'})
    bookAmount: number;

    @ManyToOne(type => OrderType, ot => ot.id)
    orderType: OrderType;
}

export interface OrderDTO {
    bookAmount: number;
}