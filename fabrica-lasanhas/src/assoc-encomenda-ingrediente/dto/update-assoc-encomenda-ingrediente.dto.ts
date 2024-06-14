import { PartialType } from '@nestjs/mapped-types';
import { CreateAssocEncomendaIngredienteDto } from './create-assoc-encomenda-ingrediente.dto';

export class UpdateAssocEncomendaIngredienteDto extends PartialType(
  CreateAssocEncomendaIngredienteDto,
) {}
