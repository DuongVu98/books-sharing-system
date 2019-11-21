import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { type } from "os";
import { Book } from "./book.entity";

@Entity('rating')
export class Rating {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('integer')
    rate: number;

    @ManyToOne(type => User, u => u.id)
    user: User;

    @ManyToOne(type => Book, b => b.rate)
    book: Book;
}