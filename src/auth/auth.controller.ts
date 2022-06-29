import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthDto } from './dtos/auth.dto';
import { AuthProfileDto } from './dtos/auth-profile.dto';

@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) {}

    @Serialize(AuthDto)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Serialize(AuthProfileDto)
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
