import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly services: UserService) {}
    users = []
    @Get()
    getUsers() {
        return this.services.getUsers() 
    }

    @Post('insert')
    insertUser(@Query() usersData: any) {
        this.services.insertUser(usersData)
        return {msg: 'User created successfully'}
    }

    @Put('update/:id')
    updateUser(@Param() id: number, @Query() usersData: any) {
        this.services.updateUser({id}, usersData)
        return {msg: 'User updated successfully'}
    }

    @Delete('delete/:id') 
    deleteUser(@Param() id: number) {
        this.services.deleteUser({id})
        return {msg: 'User deleted successfully'}
    }

    @Post('check')
    checkUser(@Query() usersData: any) {
        return this.services.loginUser(usersData)
    }
}
