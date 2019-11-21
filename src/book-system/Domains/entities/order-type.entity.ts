import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('order_type')
export class OrderType {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({name: 'name', type: 'text'})
    typeName: string;

    @Column({name: 'type', type: 'text'})
    typeDescription: string;
}

export interface OrderTypeDTO {
    typeName: string;
    typeDescription: string;
}