import { 
    Injectable,
    BadRequestException,
    NotFoundException
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UserData } from 'src/users/interfaces/user.interface';
import { AsyncSubject } from 'rxjs';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signup(userData: UserData) {
        // See if email is in use
        const users = await this.usersService.find(userData.email);
        
        if (users.length) {
            throw new BadRequestException('email in use');
        }
    
        // Hash the users password
        // Generate a salt
        const salt = randomBytes(8).toString('hex');
    
        // Hash the salt and the password together
        const hash = (await scrypt(userData.password, salt, 32)) as Buffer;
    
        // Join the hashed result and the salt together
        const result = salt + '.' + hash.toString('hex');
    
        // Set the password
        userData.password = result;

        // Create a new user and save it
        const user = await this.usersService.create(userData);
    
        // return the user
        return user;
    }

    async validateUser(email: string, password: string) {
        const [user] = await this.usersService.find(email);
        
        if (!user) {
          throw new NotFoundException('user not found');
        }
    
        const [salt, storedHash] = user.password.split('.');
    
        const hash = (await scrypt(password, salt, 32)) as Buffer;
    
        if (storedHash !== hash.toString('hex')) {
          throw new BadRequestException('Email or Password is incorrect');
        }
    
        return user;
    }

    login(user: UserData) {
        const payload = { email: user.email, id: user.id, role: user.role, displayName: user.displayName };

        return {
            token: this.jwtService.sign(payload),
            user: payload
        }
    }
}