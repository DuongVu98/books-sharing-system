import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Book } from "./book.entity";
import { Department } from "./department.entity";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({name: 'user_name', type: 'text'})
    userName: string;

    @Column('text')
    password: string;

    @Column('text')
    email: string;

    @Column({name: 'phone_number', type: 'integer'})
    phoneNumber: number;

    @Column('text')
    address: string;

    @OneToMany(type => Book, b => b.user)
    books: Book[];

    @ManyToOne(type => Department, d => d.users)
    department: Department;
}

export interface UserDTO {
    userName: string;
    password: string;
    email: string;
    phoneNumber: number;
    address: string;
}