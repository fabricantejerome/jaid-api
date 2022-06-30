import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateLoanDto } from './dtos/create-loan.dto';
import { LoanData } from './interfaces/loan.interface';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
    constructor(private loansServices: LoansService) {}

    @Get()
    async browse(): Promise<LoanData[]> {
        return await this.loansServices.findAll();
    }
    
    @Post()
    async create(@Body() body: CreateLoanDto) : Promise<LoanData> {
        const loanData: LoanData = body;

        const loan = await this.loansServices.create(loanData);

        return loan;
    }

    @Patch('/:id')
    async updateLoan(@Param('id') id: string, @Body() body: CreateLoanDto): Promise<LoanData> {
        const loanData = body;

        const loan = await this.loansServices.update(+id, loanData);

        return loan;
    }

    @Delete('/:id')
    deleteLoan(@Param('id') id: string) {
        return this.loansServices.remove(parseInt(id));
    }
}
