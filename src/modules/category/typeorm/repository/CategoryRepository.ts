import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";

@EntityRepository(Category)
export default class CategoryRepository extends Repository<Category>{
    public async findByName(name: string): Promise<Category | undefined>{
        const category = await this.findOne({
            where: { 
                name
            }
        });
        return category
    }

    public async findById(id: string): Promise<Category | undefined>{
        const category = await this.findOne({
            where: { 
                id
            }
        });
        return category
    }

}