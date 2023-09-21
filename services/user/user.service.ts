import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {InjectRepository} from '@nestjs/typeorm'
import { User } from 'src/tables/User';
import {Repository} from 'typeorm'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private user: Repository<User>, private jwtUser: JwtService) {}
    insertUser(userData: any) {
        bcrypt.hash(userData.password, 10)
        .then(password => {
            const newUser = this.user.create({...userData, password})
            this.user.save(newUser)
        })
        return {msg: 'User created successfully'}
    }

    loginUser(userData: any) {
        return this.user.find({where: {email: userData.email}})
        .then(user => {
            return bcrypt.compare(userData.password, user[0].password)
            .then(passwordStatus => {
                console.log(passwordStatus)
                const token = this.jwtUser.sign({user: user[0]})
                return {token: token, user: user}
            })
        })
    }

    getUsers() {
        return this.user.find()
    }

    updateUser(id, data) {
        return this.user.update(id, data)
    }

    deleteUser(id) {
        return this.user.delete(id)
    }
}
