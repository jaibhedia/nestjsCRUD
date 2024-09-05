import { Controller, Post, Body } from '@nestjs/common';
import { YourEntityService } from '../your-entity.service';
import { CreateYourEntityDto } from '../dto/create-your-entity.dto';

@Controller('your-entity')
export class YourEntityController {
  constructor(private readonly yourEntityService: YourEntityService) {}

  @Post()
  create(@Body() createYourEntityDto: CreateYourEntityDto) {
    return this.yourEntityService.create(createYourEntityDto);
  }
}
