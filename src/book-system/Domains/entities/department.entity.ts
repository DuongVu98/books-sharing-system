import { PrimaryGeneratedColumn, Column, OneToMany, Entity, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user.entity";
import { Book } from "./book.entity";

@Entity('department')
export class Department {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @OneToMany(type => User, u => u.department)
    users: User[];

    @ManyToMany(type => Book)
    @JoinTable({name: 'department_book'})
    books: Book[];
}

export interface DepartmentDTO {
    name: string;
    users: User[];
    books: Book[];
}