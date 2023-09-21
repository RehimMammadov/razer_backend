import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: 'about'})
    export class About {
        @PrimaryGeneratedColumn({type: 'bigint'})
        id: number

        @Column()
        title: string

        @Column({type: 'text'}) 
        description: string
    }