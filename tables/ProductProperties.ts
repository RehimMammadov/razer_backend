import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { Product } from './Product'

@Entity({name: 'productproperties'})
    export class ProductProperties {
        @PrimaryGeneratedColumn({type: 'bigint'})
        id: number

        @Column()
        title: string

        @Column()
        value: string

        @ManyToOne(() => Product, (product) => product.productproperties)
        product: Product
    }