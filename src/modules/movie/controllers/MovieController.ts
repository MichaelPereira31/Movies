import {Request, Response} from 'express';
import CreateMovieRequest from "../services/CreateMovieService"
import ListMovie from "../services/ListMovieService"
import UpdateMovieRequest from '../services/UpdateMovieService'

export default class MovieController{
    public async list(request:Request, response: Response):Promise<Response>{
        const listMovie = new ListMovie()

        const movies = await listMovie.execute()

        return response.json(movies)
    }


    public async create(request: Request, response: Response):Promise<Response>{
        const {name,categories} = request.body;

        const createMovie = new CreateMovieRequest()

        const movie = await createMovie.execute({
            name,
            categories
        })
        return response.json(movie);

    }

    public async update(request: Request, response: Response):Promise<Response>{
        const {id} = request.params;
        const {name, categories} =  request.body;

        const updateMovie = new UpdateMovieRequest()

        const movie = await updateMovie.execute({
            id,
            name,
            categories
        })

        return response.json(movie)

    }
}