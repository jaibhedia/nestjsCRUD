import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { YourEntity } from './your-entity.entity';
import { CreateYourEntityDto } from './dto/create-your-entity.dto';

@Injectable()
export class YourEntityService {
  constructor(
    @InjectRepository(YourEntity)
    private readonly yourEntityRepository: Repository<YourEntity>,
  ) {}

  // Get all entities
  async getMany(): Promise<YourEntity[]> {
    return this.yourEntityRepository.find();
  }

  // Get one entity by id
  async getOne(id: number): Promise<YourEntity> {
    const entity = await this.yourEntityRepository.findOne({ where: { id } });
    
    // Handle the case when no entity is found
    if (!entity) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }

    return entity;
  }

  // Create a new entity
  async create(createYourEntityDto: CreateYourEntityDto): Promise<YourEntity> {
    const entity = this.yourEntityRepository.create(createYourEntityDto);
    return this.yourEntityRepository.save(entity);
  }
}
