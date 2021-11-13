import {Entity, OneToMany,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {Movie} from "../../../movie/typeorm/entities/Movie"
@Entity('category')
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique:true})
    name: string;

    /*@ManyToMany(() => Movie, movies => movies.categories)
    movies: Movie[];*/

    @OneToMany(type => Movie, categories => Category)
    movies: Movie[];

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date

}
