import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from './loan.entity';
import { LoanData } from './interfaces/loan.interface';

@Injectable()
export class LoansService {
    constructor(@InjectRepository(Loan) private repo: Repository<Loan>) {}

    findAll() {
        return this.repo.find({
            order: {
                name: "ASC",
            },
        });
    }

    async create(loanData: Partial<LoanData>) {
        const loan = await this.repo.create(loanData);
    
        return this.repo.save(loan);
    }
    
    findOne(id: number) {
        if (!id) {
            return null;
        }

        return this.repo.findOneBy({id: id});
    }

    async remove(id: number) {
        const loan = await this.findOne(id);

        if (!loan) {
            throw new NotFoundException('Loan item not found');
        }
        
        return this.repo.remove(<Loan>loan);
    }

    async update(id: number, attrs: Partial<Loan>) {
        let loan = await this.findOne(id);

        if (!loan) {
            throw new NotFoundException('Loan item not found');
        }

        Object.assign(loan, attrs);

        return this.repo.save(loan);
    }
}
