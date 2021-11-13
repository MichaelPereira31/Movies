import {Entity, PrimaryGeneratedColumn, JoinTable,ManyToOne,Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {Category} from "../../../category/typeorm/entities/Category"

@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;

    @ManyToOne(type => Category, movies => Movie)
    categories: Category;


    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    update_at:Date;
}