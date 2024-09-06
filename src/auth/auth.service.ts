// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../your-entity/dto/login.dto';
import { CreateUserDto } from '../your-entity/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    // Modify this depending on whether you use userId or email as identifier
    const payload = { username: loginDto.email, sub: 'mockUserId' }; // Use a mock userId for now, or fetch it from the database
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    const payload = { username: createUserDto.email, sub: 'mockUserId' }; // Simulate creating a user with a mock userId
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
