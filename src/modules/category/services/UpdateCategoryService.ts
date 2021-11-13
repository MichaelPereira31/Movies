import { getCustomRepository } from "typeorm";
import { Category } from "../typeorm/entities/Category";
import CategoryRepository from "../typeorm/repository/CategoryRepository";

interface IRequest{
    id: string;
    name: string;
}

export default class UpdateCategoryService{
    public async execute({id,name}:IRequest): Promise<Category | undefined>{
        const categoryRepository = getCustomRepository(CategoryRepository)

        const category = await categoryRepository.findById(id);

        if(!category){
            throw new Error(`Category not found`)
        }

        category.name = name;

        await categoryRepository.save(category);

        return category;
    }
}