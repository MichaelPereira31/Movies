import {Router} from 'express'
import {Request, Response} from 'express'
import { categoryRouter } from './modules/category/routes/categoryRouter'
import { movieRouter } from './modules/movie/routes/movieRouter'

const routes = Router()
routes.use('/category',categoryRouter)
routes.use('/movie',movieRouter)
routes.get('/',(request:Request, response:Response) => {
    return response.json({message: 'Hello dev'})
})


export{routes}