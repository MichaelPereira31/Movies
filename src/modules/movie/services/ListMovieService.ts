import { getCustomRepository } from "typeorm";
import MovieRepository from '../typeorm/repository/MovieRepository'
import {Movie} from '../typeorm/entities/Movie'

export default class ListMovieService{
    public async execute(): Promise<Movie[]>{
        const movieRepository = getCustomRepository(MovieRepository)

        const movies = await movieRepository.find({relations:['categories']})

        return movies
    }
}