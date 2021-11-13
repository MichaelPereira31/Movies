import { Router} from "express";
import CategoryController from "../controllers/CategoryController";

const categoryController = new CategoryController()
const categoryRouter = Router()

categoryRouter.get('/',categoryController.index)
categoryRouter.get('/:id',categoryController.show)
categoryRouter.post('/',categoryController.create)
categoryRouter.put('/:id',categoryController.update)
categoryRouter.delete('/:id',categoryController.delete)


export {categoryRouter}