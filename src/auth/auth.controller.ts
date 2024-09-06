import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../your-entity/dto/create-user.dto'; 
import { LoginDto } from '../your-entity/dto/login.dto'; // Import the LoginDto class

@Controller('auth') // This defines the prefix for your authentication routes
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register') // The correct route for user registration
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login') // The correct route for login
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
