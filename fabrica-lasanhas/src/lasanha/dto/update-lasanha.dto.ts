import { PartialType } from '@nestjs/mapped-types';
import { CreateLasanhaDto } from './create-lasanha.dto';

export class UpdateLasanhaDto extends PartialType(CreateLasanhaDto) {}
