import { PartialType } from '@nestjs/mapped-types';
import { CreateAssocLasanhaIngredienteDto } from './create-assoc-lasanha-ingrediente.dto';

export class UpdateAssocLasanhaIngredienteDto extends PartialType(CreateAssocLasanhaIngredienteDto) {}
