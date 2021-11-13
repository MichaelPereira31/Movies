import { getCustomRepository } from "typeorm";
import MovieRepository from '../typeorm/repository/MovieRepository'
import { Movie } from "../typeorm/entities/Movie"

interface IRequest{
    name: string;
    categories:any;
}

export default class CreateCategoryService{
    public async execute({name, categories}:IRequest):Promise<Movie>{
        
        const movieRepository = getCustomRepository(MovieRepository)
        
        const existMovie = await movieRepository.findByName(name)
    
        if(existMovie){
            throw new Error('Exixst name movie')
        }
        
        const movie = await movieRepository.create({
            name,
            categories
        })
        
        await movieRepository.save(movie)

        return movie
        
    }
}