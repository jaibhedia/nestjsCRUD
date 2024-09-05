import { Test, TestingModule } from '@nestjs/testing';
import { YourEntityController } from './your-entity.controller';

describe('YourEntityController', () => {
  let controller: YourEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YourEntityController],
    }).compile();

    controller = module.get<YourEntityController>(YourEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
