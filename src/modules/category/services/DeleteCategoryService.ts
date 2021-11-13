import { getCustomRepository } from "typeorm";
import CategoryRepository from "../typeorm/repository/CategoryRepository";
import { Category } from "../typeorm/entities/Category";

interface IRequest{
    id: string;
}

export default class DeleteCategoryService{
    public async execute({id}:IRequest):Promise<Category>{
        const categoryRepository = getCustomRepository(CategoryRepository)

        const category = await categoryRepository.findById(id);

        if(!category){
            throw new Error('category not found')
        }

        await categoryRepository.remove(category)

        return category
    }
}