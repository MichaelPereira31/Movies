import CreateCategoryService from "../services/CreateCategoryService";
import { Request, Response } from "express";
import ListCategoryService from "../services/ListCategoryService";
import UpdateCategoryService from "../services/UpdateCategoryService";
import ShowCategoryService from "../services/ShowCategoryService";
import DeleteCategoryService from "../services/DeleteCategoryService";


export default class CategoryController{
    public async index(request: Request, response: Response): Promise<Response>{
        const listCategory = new ListCategoryService();

        const category = await listCategory.execute()

        return response.json(category)
    }

    public async show(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const showCategory = new ShowCategoryService();

        const category = await showCategory.execute({id})

        return response.json(category)
    }


    public async create(request: Request, response: Response):Promise<Response>{
        const{ name } = request.body;
        const createCategory = new CreateCategoryService();

        const category = await createCategory.excute({
            name
        })

        return response.json(category);
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const {name} = request.body;
        
        const updateCategory = new UpdateCategoryService()

        const category = await updateCategory.execute({
            id,
            name
        })

        return response.json(category)
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;

        const deleteCategory = new DeleteCategoryService()

        const category = await deleteCategory.execute({id})

        return response.json(category)
    }
}