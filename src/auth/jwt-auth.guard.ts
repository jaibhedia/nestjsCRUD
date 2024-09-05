import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your-secret-key',  // Use a strong secret in production
    });
  }

  async validate(payload: any) {
    // Add your validation logic here, e.g., checking the user in the database
    return { userId: payload.sub, username: payload.username };
  }
}
