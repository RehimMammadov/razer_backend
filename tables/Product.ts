import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Category } from './Category'
import { ProductProperties } from './ProductProperties'
import { Images } from './Images'

@Entity({name: 'product'})
    export class Product {
        @PrimaryGeneratedColumn({type: 'bigint'})
        id: number

        @Column()
        title: string

        @Column()
        price: number

        @Column({unique: null, nullable: true})
        discountPrice: number

        @Column({default: 1})
        status: number

        @Column()
        image: string

        @ManyToOne(() => Category, (category) => category.product)
        category: Category
        
        @OneToMany(() => ProductProperties, (productproperties) => productproperties.product)
        productproperties: ProductProperties

        @OneToMany(() => Images, (images) => images.product)
        images: Images
    }