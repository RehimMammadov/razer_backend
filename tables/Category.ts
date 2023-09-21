import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { Product } from './Product'

@Entity({name: 'category'})
    export class Category {
        @PrimaryGeneratedColumn({type: 'bigint'})
        id: number

        @Column()
        title: string

        @OneToMany(() => Product, (product) => product.category)
        product: Product
    }