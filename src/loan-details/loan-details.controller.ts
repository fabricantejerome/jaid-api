import { Body, Controller, Post } from '@nestjs/common';
import { CreateLoanDto } from 'src/loans/dtos/create-loan.dto';
import { CreateLoanDetailsDto } from './dtos/create-loan-detailsDto';
import { LoanDetailsService } from './loan-details.service';

@Controller('loan-details')
export class LoanDetailsController {
    constructor(private loanDetailsServices: LoanDetailsService) {}

    @Post()
    async create(@Body('loan') loan: CreateLoanDto, @Body('loanDetails') loanDetails: CreateLoanDetailsDto) {
        const loanDetailsResponse = await this.loanDetailsServices.create(loan, loanDetails);

        return loanDetailsResponse;
    }
}
