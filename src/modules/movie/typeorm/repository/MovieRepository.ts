import {Movie} from '../entities/Movie'
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Movie)
export default class MovieRepository extends Repository<Movie>{
    public async findById(id: string): Promise<Movie | undefined> {
        const movie = await this.findOne({
            where:{
                id
            }
        });
        return movie
    }

    public async findByName(name: string): Promise<Movie | undefined> {
        const movie = await this.findOne({
            where: {
                name
            }
        })
        return movie
    }

}