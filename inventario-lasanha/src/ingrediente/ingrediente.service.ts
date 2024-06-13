import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class IngredienteService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateIngredienteDto) {
    const ingredienteCriado = this.prismaService.ingrediente.create({ data });
    return ingredienteCriado;
  }

  findAll() {
    const todosIngrediente = this.prismaService.ingrediente.findMany();
    return todosIngrediente;
  }

  findOne(id: number) {
    const ingrediente = this.prismaService.ingrediente.findUnique({
      where: { id },
    });
    return ingrediente;
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    const ingredienteAtualizado = this.prismaService.ingrediente.update({
      where: { id },
      data: updateIngredienteDto,
    });
    return ingredienteAtualizado;
  }

  remove(id: number) {
    this.prismaService.ingrediente.delete({ where: { id } });
    return `This action removes ingrediente #${id}`;
  }
}
