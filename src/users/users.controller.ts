import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserData } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
        private authService: AuthService
    ) {}

    @Post()
    async signup(@Body() body: CreateUserDto) : Promise<UserData> {
        const userData: UserData = body;

        const user = await this.authService.signup(userData);

        return user;
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.usersService.remove(parseInt(id));
    }
}
