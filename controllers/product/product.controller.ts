import { Controller, Delete, Get, Param, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProductService } from 'src/services/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly services: ProductService) {}
    products = []
    @Get()
    getProducts(@Query() filterData: any) {
        return this.services.getProducts(filterData)
    }

    @Post('insert')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads/images',
            filename: (req, file, callBack) => {
                const uniqueName = Date.now()+"-"+Math.round(Math.random()*1000000);
                const ext = extname(file.originalname)
                const filename = `${uniqueName}${ext}`
                callBack(null, filename)
            }
        })
    }))

    insertProducts(@UploadedFile() image: Express.Multer.File, @Query() productsData: any) {
        const imageName = `${image.destination.substring(2, image.destination.length)}/${image.filename}`
        return this.services.insertProducts(productsData, imageName)
    }

    @Put('update/:id')
    updateProduct(@Param() id: number, @Query() productsData: any) {
        return this.services.updateProduct({id},productsData)
    }

    @Delete('delete/:id')
    deleteProduct(@Param() id: number) {
        return this.services.deleteProduct(id)
    }

    @Get(":id")
    getPrById(@Param() id:number){
        return this.services.getProductById(id)
    }
}
