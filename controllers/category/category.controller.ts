import { Controller, Get, Delete, Param, Post, Put, Query } from '@nestjs/common';
import { CategoryService } from 'src/services/category/category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly services: CategoryService) {}
    categories = []
    @Get() 
    getCategories() {
        return this.services.getCategories()
    }

    @Post('insert')
    insertCategory(@Query() categoriesData: any) {
        return this.services.insertCategory(categoriesData)
    }

    @Put('update/:id')
    updateCategory(@Param() id: number, @Query() categoriesData: any) {
        return this.services.updateCategory({id}, categoriesData)
    }

    @Delete('delete/:id')
    deleteCategory(@Param() id: number) {
        return this.services.deleteCategory(id)
    }
}
