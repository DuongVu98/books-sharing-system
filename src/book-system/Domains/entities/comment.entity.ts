import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Book } from "./book.entity";
import { type } from "os";

@Entity('comment')
export class Comment {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    content: string;

    @ManyToOne(type => User, u => u.id)
    user: User;

    @ManyToOne(type => Book, b => b)
    book: Book;
}

export interface CommentDTO {
    content: string;
}