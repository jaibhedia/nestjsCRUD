import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { YourEntity } from './your-entity.entity';
import { CreateYourEntityDto } from './dto/create-your-entity.dto';
import { UpdateYourEntityDto } from './dto/update-your-entity.dto';  // Import Update DTO

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

  // Update an entity
  async update(id: number, updateYourEntityDto: UpdateYourEntityDto): Promise<YourEntity> {
    const entity = await this.getOne(id); // Fetch the entity to be updated
    Object.assign(entity, updateYourEntityDto); // Merge the new values with the existing entity
    return this.yourEntityRepository.save(entity); // Save the updated entity
  }

  // Delete an entity
  async delete(id: number): Promise<void> {
    const result = await this.yourEntityRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
  }
}
