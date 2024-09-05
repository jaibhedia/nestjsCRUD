import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { YourEntityService } from './your-entity.service';
import { CreateYourEntityDto } from './dto/create-your-entity.dto';
import { YourEntity } from './your-entity.entity';

@Controller('your-entity')
export class YourEntityController {
  constructor(private readonly yourEntityService: YourEntityService) {}

  @Get()
  findAll() {
    return this.yourEntityService.getMany();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.yourEntityService.getOne(id);
  }

  @Post()
  create(@Body() createYourEntityDto: CreateYourEntityDto) {
    return this.yourEntityService.create(createYourEntityDto);
  }
}
