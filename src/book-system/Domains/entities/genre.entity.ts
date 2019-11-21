import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('genre')
export class Genre {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;
}