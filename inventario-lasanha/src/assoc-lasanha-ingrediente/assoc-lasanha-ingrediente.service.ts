import { Injectable } from '@nestjs/common';
import { CreateAssocLasanhaIngredienteDto } from './dto/create-assoc-lasanha-ingrediente.dto';
import { UpdateAssocLasanhaIngredienteDto } from './dto/update-assoc-lasanha-ingrediente.dto';

@Injectable()
export class AssocLasanhaIngredienteService {
  create(createAssocLasanhaIngredienteDto: CreateAssocLasanhaIngredienteDto) {
    return 'This action adds a new assocLasanhaIngrediente';
  }

  findAll() {
    return `This action returns all assocLasanhaIngrediente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assocLasanhaIngrediente`;
  }

  update(id: number, updateAssocLasanhaIngredienteDto: UpdateAssocLasanhaIngredienteDto) {
    return `This action updates a #${id} assocLasanhaIngrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} assocLasanhaIngrediente`;
  }
}
