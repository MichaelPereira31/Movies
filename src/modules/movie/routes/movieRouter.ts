import {Router} from 'express'
import MovieController from '../controllers/MovieController'

const movieController = new MovieController()
const movieRouter = Router()

movieRouter.get('/',movieController.list)
movieRouter.post('/',movieController.create)
movieRouter.put('/:id',movieController.update)


export {movieRouter}

