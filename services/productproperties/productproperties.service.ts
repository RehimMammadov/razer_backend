import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductProperties } from 'src/tables/ProductProperties';
import { Repository } from 'typeorm';

@Injectable()
export class ProductpropertiesService {
    constructor(@InjectRepository(ProductProperties) private productProperties: Repository<ProductProperties>) {}

    getProductProperties() {
        return this.productProperties.find()
    }

    insertProductProperties(productpropertiesData) {
        const newProductProperties = this.productProperties.create(productpropertiesData)
        this.productProperties.save(newProductProperties)
        return {msg: 'Productproperties created successfully'}
    }

    updateProductProperties(id, data) {
        this.productProperties.update(id, data)
        return {msg: 'Productproperties updated successfully'}
    }

    deleteProductProperties(id) {
        this.productProperties.delete(id)
        return {msg: 'Productproperties deleted successfully'}
    }

    getProductPropertiesById(id){
        console.log(id)
        return this.productProperties.findOne({where:{id:id.id}, relations:["product"]})
    }
}










// {relations: ['product'], where: {product: {id: filterData.filterByProduct}}}