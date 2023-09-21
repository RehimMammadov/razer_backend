import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/tables/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private product: Repository<Product>) {}

    getProducts(filterData) {
        if(filterData.filterByCategory && filterData.filterByCategory != '') {
            return this.product.find({relations: ["category"], where:{category: {id: filterData.filterByCategory}}})
        } else {
            return this.product.find({relations: ["category"]})
        }
        
    }
    getProductById(id){
        console.log(id)
        return this.product.findOne({where:{id:id.id}, relations:["productproperties"]})
       
    }
    insertProducts(productData, imageName) {
        const newProduct = this.product.create({...productData, image: imageName})
        this.product.save(newProduct)
        return {msg: 'Product created successfully'}
    }

    updateProduct(id, data) {
        this.product.update(id, data)
    }

    deleteProduct(id) {
        this.product.delete(id)
    }
} 
