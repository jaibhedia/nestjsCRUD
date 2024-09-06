import { Test, TestingModule } from '@nestjs/testing';
import { YourEntityController } from './your-entity.controller';
import { YourEntityService } from './your-entity.service';
import { YourEntity } from './your-entity.entity';

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
            getMany: jest.fn(), // Mock the getMany method (equivalent to findAll)
            getOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<YourEntityController>(YourEntityController);
    service = module.get<YourEntityService>(YourEntityService);
  });

  it('should return all entities', async () => {
    const result: YourEntity[] = []; // Mocked result array
    jest.spyOn(service, 'getMany').mockResolvedValue(result); // Mock getMany (equivalent to findAll)

    expect(await controller.getMany()).toBe(result); // Test if getMany returns the mocked result
  });
});
