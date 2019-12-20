import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    ManyToMany,
    JoinTable,
    JoinColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { type } from "os";
import { Rating } from "./rating.entity";
import { Genre } from "./genre.entity";
import { Tag } from "./tag.entity";
import { Department } from "./department.entity";

@Entity("book")
export class Book {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    title: string;

    @Column("text")
    author: string;

    @Column("integer")
    amount: number;

    @ManyToOne(type => User, u => u.books)
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(type => Comment, c => c.book)
    comments: Comment[];

    @OneToMany(type => Rating, r => r.book)
    rate: Rating[];

    @ManyToMany(type => Genre)
    @JoinTable({ name: "book_genre" })
    genre: Genre[];

    @ManyToMany(type => Tag)
    @JoinTable({ name: "book_tag" })
    tags: Tag[];

    @ManyToMany(type => Department, d => d.books)
    departments: Department[];
}

export interface BookDTO {
    title: string;
    author: string;
    amount: number;
    department: Department[];
}
