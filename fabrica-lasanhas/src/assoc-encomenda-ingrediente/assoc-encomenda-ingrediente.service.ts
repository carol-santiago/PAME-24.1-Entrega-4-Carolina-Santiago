import { Injectable } from '@nestjs/common';
import { CreateAssocEncomendaIngredienteDto } from './dto/create-assoc-encomenda-ingrediente.dto';
import { UpdateAssocEncomendaIngredienteDto } from './dto/update-assoc-encomenda-ingrediente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssocEncomendaIngredienteService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateAssocEncomendaIngredienteDto) {
    const assocEncomendaIngredienteCriado =
      this.prismaService.assocEncomendaIngrediente.create({ data });
    return assocEncomendaIngredienteCriado;
  }

  findAll() {
    const todasAssocEncomendaIngrediente =
      this.prismaService.assocEncomendaIngrediente.findMany();
    return todasAssocEncomendaIngrediente;
  }

  findOne(id: number) {
    const assocEncomendaIngrediente =
      this.prismaService.assocEncomendaIngrediente.findUnique({
        where: { id },
      });
    return assocEncomendaIngrediente;
  }

  update(
    id: number,
    updateAssocEncomendaIngredienteDto: UpdateAssocEncomendaIngredienteDto,
  ) {
    const assocEncomendaIngredienteAtualizado =
      this.prismaService.assocEncomendaIngrediente.update({
        where: { id },
        data: updateAssocEncomendaIngredienteDto,
      });
    return assocEncomendaIngredienteAtualizado;
  }

  async remove(id: number) {
    await this.prismaService.assocEncomendaIngrediente.delete({
      where: { id },
    });
    return `This action removes assocEncomendaIngrediente #${id}`;
  }
}
