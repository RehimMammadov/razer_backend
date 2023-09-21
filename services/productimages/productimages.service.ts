import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from 'src/tables/Images';
import { Repository } from 'typeorm';

@Injectable()
export class ProductimagesService {
    constructor(@InjectRepository(Images) private images: Repository<Images>){}

    getImages(filterData) {
        if(filterData.filterByProduct && filterData.filterByProduct != '') {
            return this.images.find({relations: ["images"], where: {product: {id: filterData.filterByProduct}}})
        }
    }

    insertImages(imagesData, imageName) {
        const newImages = this.images.create({...imagesData, image: imageName})
        this.images.save(newImages)
        return {msg: "Images added successfully"}
    }

    updateImages(id, data) {
        return this.images.update(id, data)
    }

    deleteImages(id) {
        return this.images.delete(id)
    }
}
