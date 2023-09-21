import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity({name: 'images'})
    export class Images {
        @PrimaryGeneratedColumn({type: 'bigint'})
        id: number

        @Column()
        images: string

        @ManyToOne(() => Product, (product) => product.images)
        product: Product
    }