import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: 'user'})
    export class User {
        @PrimaryGeneratedColumn({type: 'bigint'})
        id: number

        @Column()
        firstName: string

        @Column()
        lastName: string

        @Column({unique: true})
        email: string

        @Column()
        password: string

        @Column({default: 'saler'})
        role: string
    }
