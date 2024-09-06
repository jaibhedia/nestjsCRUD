// src/your-entity/your-entity.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Ensure the path to your guard is correct
import { YourEntityService } from './your-entity.service';
import { CreateYourEntityDto } from './dto/create-your-entity.dto';
import { UpdateYourEntityDto } from './dto/update-your-entity.dto';

@Controller('your-entity')
export class YourEntityController {
  constructor(private readonly yourEntityService: YourEntityService) {}

  // Protect the route with JWT guard
  @UseGuards(JwtAuthGuard)
  @Get()
  getMany() {
    return this.yourEntityService.getMany();
  }

  // Protect the route with JWT guard
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.yourEntityService.getOne(id);
  }

  // Protect the route with JWT guard
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createYourEntityDto: CreateYourEntityDto) {
    return this.yourEntityService.create(createYourEntityDto);
  }

  // Protect the route with JWT guard
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateYourEntityDto: UpdateYourEntityDto) {
    return this.yourEntityService.update(id, updateYourEntityDto);
  }

  // Protect the route with JWT guard
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.yourEntityService.delete(id);
  }
}
