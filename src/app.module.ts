import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { YourEntityModule } from './your-entity/your-entity-module'; // Make sure the path is correct
import { AuthModule } from './auth/auth.module'; // Import your AuthModule
import { jwtConstants } from './auth/constants'; // Import the JWT secret

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Or your chosen database type
      host: 'localhost', // Your database host
      port: 5432, // Your database port
      username: 'myuser', // Your database username
      password: 'user', // Your database password
      database: 'mydatabase', // Your database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
    }),
    YourEntityModule, // Your custom entity module
    AuthModule, // Import AuthModule for authentication
    PassportModule.register({ defaultStrategy: 'jwt' }), // Register Passport with 'jwt' as default strategy
    JwtModule.register({
      secret: jwtConstants.secret, // Your JWT secret
      signOptions: { expiresIn: '1d' }, // JWT expiration time
    }),
  ],
})
export class AppModule {}
