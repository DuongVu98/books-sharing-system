import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Book } from "./book.entity";

@Entity('tag')
export class Tag {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'tag_name', type: 'text'})
    tagName: string;

    @ManyToMany(type => Book)
    books: Book[]
}