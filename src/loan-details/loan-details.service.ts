import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanDetails } from './loan-details.entity';
import { LoanDetailsData } from './interfaces/loan-details.interface';
import { Loan } from 'src/loans/loan.entity';
import { LoanData } from 'src/loans/interfaces/loan.interface';

@Injectable()
export class LoanDetailsService {
    constructor(@InjectRepository(LoanDetails) private repo: Repository<LoanDetails>) {}

    async create(loanData: LoanData ,loanDetailsData: Partial<LoanDetails>): Promise<LoanDetailsData> {
        const loanDetails = await this.repo.create(loanDetailsData);
        const loan = new Loan();
        loan.id = loanData.id
        loanDetails.loan = loan;
        return this.repo.save(loanDetails);
    }
}
