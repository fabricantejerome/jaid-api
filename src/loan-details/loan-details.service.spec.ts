import { Test, TestingModule } from '@nestjs/testing';
import { LoanDetailsService } from './loan-details.service';

describe('LoanDetailsService', () => {
  let service: LoanDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanDetailsService],
    }).compile();

    service = module.get<LoanDetailsService>(LoanDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
