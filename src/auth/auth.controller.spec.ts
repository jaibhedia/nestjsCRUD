// src/auth/auth.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../your-entity/dto/create-user.dto'; // Assuming this is the correct DTO path

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            register: jest.fn(),
            login: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should call register with correct data', async () => {
    const dto: CreateUserDto = {
      email: 'test@test.com',
      password: 'test123',
    };
    await controller.register(dto);
    expect(service.register).toHaveBeenCalledWith(dto);
  });

  it('should call login with correct data', async () => {
    const loginDto = { email: 'test@test.com', password: 'test123', userId: '123' };
    await controller.login(loginDto);
    expect(service.login).toHaveBeenCalledWith(loginDto);
  });
});
