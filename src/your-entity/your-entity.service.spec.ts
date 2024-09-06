import { Test, TestingModule } from '@nestjs/testing';
import { YourEntityController } from './your-entity.controller';
import { YourEntityService } from './your-entity.service';

describe('YourEntityController', () => {
  let controller: YourEntityController;
  let service: YourEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YourEntityController],
      providers: [
        {
          provide: YourEntityService,
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<YourEntityController>(YourEntityController);
    service = module.get<YourEntityService>(YourEntityService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
