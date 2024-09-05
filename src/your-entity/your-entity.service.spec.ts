import { Test, TestingModule } from '@nestjs/testing';
import { YourEntityService } from './your-entity.service';

describe('YourEntityService', () => {
  let service: YourEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YourEntityService],
    }).compile();

    service = module.get<YourEntityService>(YourEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
