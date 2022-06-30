import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanDetails } from './loan-details.entity';
import { LoanDetailsData } from './interfaces/loan-details.interface';
import { Loan } from 'src/loans/loan.entity';

@Injectable()
export class LoanDetailsService {
    constructor(@InjectRepository(LoanDetails) private repo: Repository<LoanDetails>) {}

    async create(loanDetailsData: LoanDetailsData): Promise<LoanDetailsData> {
        const loanDetails = await this.repo.create(loanDetailsData);

        // const loan = new Loan();
        // loan.id = 1;
        // loan.name = "Jerome Fabricante";
        // loan.address = "Silang, Cavite";
        // loan.amount = 20000;
        // loan.duration = "12 Months";
        // loan.email = "jerome.fabricante@opsolutions.biz";
        // loan.interestRate = 0.25;
        // loan.loanDate = "2022-06-29";
        // loan.mobile = "09272612690";
        // loan.totalLoan = 25000;
        // loan.isApproved = true;
        // loanDetails.loan = loan;
    
        return this.repo.save(loanDetails);
    }
}
