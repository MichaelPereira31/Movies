import { getCustomRepository } from "typeorm";
import {Movie} from '../typeorm/entities/Movie'
import MovieRepository from '../typeorm/repository/MovieRepository'

interface IRequest{
    id: string;
    name: string;
    categories: any;
}

export default class UpdateCategoryService{
    public async execute({id,name, categories}:IRequest):Promise<Movie>{
        const movieRepository = getCustomRepository(MovieRepository)

        const movie = await movieRepository.findById(id)

        if(!movie){
            throw new Error('Movie not found')
        }

        movie.name = name
        movie.categories = categories

        await movieRepository.save(movie)

        return movie
    }
}