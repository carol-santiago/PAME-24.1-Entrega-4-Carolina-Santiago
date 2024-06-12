import { Injectable } from '@nestjs/common';
import { CreateAssocEncomendaIngredienteDto } from './dto/create-assoc-encomenda-ingrediente.dto';
import { UpdateAssocEncomendaIngredienteDto } from './dto/update-assoc-encomenda-ingrediente.dto';

@Injectable()
export class AssocEncomendaIngredienteService {
  create(createAssocEncomendaIngredienteDto: CreateAssocEncomendaIngredienteDto) {
    return 'This action adds a new assocEncomendaIngrediente';
  }

  findAll() {
    return `This action returns all assocEncomendaIngrediente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assocEncomendaIngrediente`;
  }

  update(id: number, updateAssocEncomendaIngredienteDto: UpdateAssocEncomendaIngredienteDto) {
    return `This action updates a #${id} assocEncomendaIngrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} assocEncomendaIngrediente`;
  }
}
