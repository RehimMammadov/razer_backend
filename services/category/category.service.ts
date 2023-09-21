import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/tables/Category';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private category: Repository<Category>) {}

    getCategories() {
        return this.category.find({relations: ["product"]});
    }

    insertCategory(categoryData) {
        const newCategory = this.category.create(categoryData)
        this.category.save(newCategory)
        return {msg: 'Category created successfully'}
    }

    updateCategory(id, data) {
        return this.category.update(id, data)
    }

    deleteCategory(id) {
        return this.category.delete(id)
    }
} 
