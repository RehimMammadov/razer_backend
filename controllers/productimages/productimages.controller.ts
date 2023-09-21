import { Controller, Get, Post, Query, UseInterceptors, UploadedFile, Put, Param, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProductimagesService } from 'src/services/productimages/productimages.service';

@Controller('productimages')
export class ProductimagesController {
    constructor(private readonly services: ProductimagesService) {}
    images = []
    @Get()
    getImages(@Query() filterData: any) {
        return this.services.getImages(filterData)
    }

    @Post('insert')
    @UseInterceptors(FileInterceptor('images', {
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

    insertProducts(@UploadedFile() image: Express.Multer.File, @Query() imagesData: any) {
        const imageName = `${image.destination.substring(2, image.destination.length)}/${image.filename}`
        return this.services.insertImages(imagesData, imageName)
    }

    @Put('update/:id')
    updateProduct(@Param() id: number, @Query() imagesData: any) {
        return this.services.updateImages({id}, imagesData)
    }

    @Delete('delete/:id')
    deleteProduct(@Param() id: number) {
        return this.services.deleteImages(id)
    }
}
