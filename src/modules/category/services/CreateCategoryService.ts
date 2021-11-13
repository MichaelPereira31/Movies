import { getCustomRepository } from "typeorm";
import CategoryRepository from "../typeorm/repository/CategoryRepository";
import {Category} from "../typeorm/entities/Category"
interface IRequest{
    name: string;
}

export default class CreateCategoryService{
    public async excute({name}:IRequest): Promise<Category> {
        const categoryRepository = getCustomRepository(CategoryRepository)

        const existCategory = await categoryRepository.findByName(name)

        if(existCategory){
            throw new Error(`Category ${name} already exists`)
        }

        const category  = await categoryRepository.create({name})

        await categoryRepository.save(category)

        return category
    }
}