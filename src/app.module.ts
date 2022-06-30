import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { LoansModule } from './loans/loans.module';
import { Loan } from './loans/loan.entity';
import { LoanDetailsModule } from './loan-details/loan-details.module';
import { LoanDetails } from './loan-details/loan-details.entity';

@Module({
    imports: [
        AuthModule,
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [User, Loan, LoanDetails],
            synchronize: true,
        }),
        LoansModule,
        LoanDetailsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
