import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';
  
@Entity()
export class Loan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    amount: number;

    @Column()
    duration: string;

    @Column()
    email: string;

    @Column()
    interestRate: number;

    @Column()
    loanDate: string;

    @Column()
    mobile: string;

    @Column()
    totalLoan: number;

    @Column({ default: true })
    isApproved: boolean;
  
    @AfterInsert()
    logInsert() {
      console.log('Inserted User with id', this.id);
    }
  
    @AfterUpdate()
    logUpdate() {
      console.log('Updated User with id', this.id);
    }
  
    @AfterRemove()
    logRemove() {
      console.log('Removed User with id', this.id);
    }
}
  