import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserData } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    findAll(): Promise<UserData[]> {
        return this.repo.find();
    }

    async create(userData: UserData): Promise<UserData> {
        const user = await this.repo.create(userData);
    
        return this.repo.save(user);
    }
    
    findOne(id: number): Promise<UserData> {
        if (!id) {
            return null;
        }

        return this.repo.findOneBy({id: id});
    }

    find(email: string): Promise<UserData[]> {
        return this.repo.findBy({ email: email });
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        Object.assign(user, attrs);

        return this.repo.save(user);
    }

    async remove(id: number) {
        const user = await this.findOne(id);

        if (!user) {
            throw new NotFoundException('User not found');
        }
        
        return this.repo.remove(<User>user);
    }
}