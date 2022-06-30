import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateLoanDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsNumber()
    amount: number;

    @IsString()
    duration: string;

    @IsEmail()
    email: string;

    @IsNumber()
    interestRate: number;

    @IsString()
    loanDate: string;

    @IsString()
    mobile: string;

    @IsNumber()
    totalLoan: number;
}
