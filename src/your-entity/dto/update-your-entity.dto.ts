import { PartialType } from '@nestjs/mapped-types';
import { CreateYourEntityDto } from './create-your-entity.dto';

// Update DTO, allows partial updates (all fields are optional)
export class UpdateYourEntityDto extends PartialType(CreateYourEntityDto) {}
