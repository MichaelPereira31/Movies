import { getCustomRepository } from "typeorm";
import { Category } from "../typeorm/entities/Category";
import CategoryRepository from "../typeorm/repository/CategoryRepository";
interface IRequest{
    id: string;
}
export default class ShowCategoryService{
    public async execute({id}:IRequest):Promise<Category | undefined>{
        const showCategory = getCustomRepository(CategoryRepository)

        const category = await showCategory.findById(id)

        if(!category){
            throw new Error(`Category not found`)
        }

        return category

    }
}