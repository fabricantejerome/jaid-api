import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne
} from 'typeorm';
import { Loan } from 'src/loans/loan.entity';
  
@Entity()
export class LoanDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paymentDate: string;

    @Column()
    amount: number;

    @Column()
    approvedBy: string;

    @ManyToOne(() => Loan, (loan) => loan.loanDetails)
    loan: Loan;
  
    @AfterInsert()
    logInsert() {
        console.log('Inserted Loan Details with id', this.id);
    }
  
    @AfterUpdate()
    logUpdate() {
        console.log('Updated Loan Details with id', this.id);
    }
  
    @AfterRemove()
    logRemove() {
        console.log('Removed Loan Details with id', this.id);
    }
}
  