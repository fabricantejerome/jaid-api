import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLoanDetailsDto {
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsString()
    paymentDate: string;

    @IsNumber()
    amount: number;

    @IsNumber()
    loanId: number;

    @IsString()
    approvedBy: string;
}
