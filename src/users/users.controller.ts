import { Controller, Get, Post, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserData } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
@Serialize(UserDto)
export class UsersController {
    constructor(
        private usersService: UsersService,
        private authService: AuthService
    ) {}

    @Get()
    fetch(): Promise<UserData[]> {
        return this.usersService.findAll();
    }

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
