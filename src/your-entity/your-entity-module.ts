import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YourEntity } from './your-entity.entity';
import { YourEntityService } from './your-entity.service';
import { YourEntityController } from './your-entity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([YourEntity])],
  providers: [YourEntityService],
  controllers: [YourEntityController],
})
export class YourEntityModule {}
