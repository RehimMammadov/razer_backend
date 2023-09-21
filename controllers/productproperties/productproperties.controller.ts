import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductpropertiesService } from 'src/services/productproperties/productproperties.service';

@Controller('productproperties')
export class ProductpropertiesController {
    constructor(private readonly services: ProductpropertiesService) {}
    productproperties = []
    @Get() 
    getProductProperties() {
        return this.services.getProductProperties()
    }

    @Get()
    getProductPropertiesById(@Param() id: number) {
        return this.services.getProductPropertiesById(id)
    }

    @Post('insert')
    insertProductProperties(@Query() productpropertiesData: any) {
        return this.services.insertProductProperties(productpropertiesData)
    }

    @Put('update/:id') 
    updateProductProperties(@Param() id: number, @Query() productpropertiesData: any) {
        return this.services.updateProductProperties({id}, productpropertiesData)
    }

    @Delete('delete/:id')
    deleteProductProperties(@Param() id: number) {
        return this.services.deleteProductProperties({id})
    }

    @Get(":id")
    getProductPrById(@Param() id:number){
        return this.services.getProductPropertiesById(id)
    }
}
