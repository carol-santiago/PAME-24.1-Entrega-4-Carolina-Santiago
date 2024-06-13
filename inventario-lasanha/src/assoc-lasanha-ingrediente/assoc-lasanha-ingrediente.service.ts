import { Injectable } from '@nestjs/common';
import { CreateAssocLasanhaIngredienteDto } from './dto/create-assoc-lasanha-ingrediente.dto';
import { UpdateAssocLasanhaIngredienteDto } from './dto/update-assoc-lasanha-ingrediente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AssocLasanhaIngredienteService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateAssocLasanhaIngredienteDto) {
    const assocLasanhaIngredienteCriado =
      this.prismaService.assocLasanhaIngrediente.create({ data });
    return assocLasanhaIngredienteCriado;
  }

  findAll() {
    const todasAssocLasanhaIngrediente =
      this.prismaService.assocLasanhaIngrediente.findMany();
    return todasAssocLasanhaIngrediente;
  }

  findOne(id: number) {
    const assocLasanhaIngrediente =
      this.prismaService.assocLasanhaIngrediente.findUnique({
        where: { id },
      });
    return assocLasanhaIngrediente;
  }

  update(
    id: number,
    updateAssocLasanhaIngredienteDto: UpdateAssocLasanhaIngredienteDto,
  ) {
    const assocLasanhaIngredienteAtualizado =
      this.prismaService.assocLasanhaIngrediente.update({
        where: { id },
        data: updateAssocLasanhaIngredienteDto,
      });
    return assocLasanhaIngredienteAtualizado;
  }

  remove(id: number) {
    this.prismaService.assocLasanhaIngrediente.delete({ where: { id } });
    return `This action removes assocLasanhaIngrediente #${id} `;
  }
}
