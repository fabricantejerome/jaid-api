import { Body, Controller, Post } from '@nestjs/common';
import { CreateLoanDetailsDto } from './dtos/create-loan-detailsDto';
import { LoanDetailsData } from './interfaces/loan-details.interface';
import { LoanDetailsService } from './loan-details.service';

@Controller('loan-details')
export class LoanDetailsController {
    constructor(private loanDetailsServices: LoanDetailsService) {}

    @Post()
    async create(@Body() body: CreateLoanDetailsDto) : Promise<LoanDetailsData> {
        const loanDetailsData: LoanDetailsData = body;

        const loanDetails = await this.loanDetailsServices.create(loanDetailsData);

        return loanDetails;
    }
}
