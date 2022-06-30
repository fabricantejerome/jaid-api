import { Module } from '@nestjs/common';
import { LoanDetailsService } from './loan-details.service';
import { LoanDetailsController } from './loan-details.controller';
import { LoanDetails } from './loan-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([LoanDetails])
    ],
    providers: [LoanDetailsService],
    controllers: [LoanDetailsController]
})
export class LoanDetailsModule {}
