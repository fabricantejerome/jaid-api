import { Module } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './loan.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Loan])
    ],
    providers: [LoansService],
    controllers: [LoansController]
})
export class LoansModule {}
