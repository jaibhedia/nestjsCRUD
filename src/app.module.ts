import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YourEntityModule } from './your-entity/your-entity-module'; // Check if the file path is correct and if the module file exists

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
    YourEntityModule,
  ],
})
export class AppModule {}
