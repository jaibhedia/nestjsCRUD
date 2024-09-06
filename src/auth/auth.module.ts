// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy'; // Ensure this is imported
import { JwtAuthGuard } from './guards/jwt-auth.guard'; // Ensure this is imported
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants'; // Ensure this points to your secret

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // Register passport and 'jwt' strategy
    JwtModule.register({
      secret: jwtConstants.secret, // Use your own secret here
      signOptions: { expiresIn: '1d' }, // Token expiration time
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard], // Make sure JwtStrategy is a provider
  controllers: [AuthController],
})
export class AuthModule {}
