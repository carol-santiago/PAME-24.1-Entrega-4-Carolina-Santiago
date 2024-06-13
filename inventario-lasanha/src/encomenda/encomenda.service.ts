import { Injectable } from '@nestjs/common';
import { CreateEncomendaDto } from './dto/create-encomenda.dto';
import { UpdateEncomendaDto } from './dto/update-encomenda.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class EncomendaService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateEncomendaDto) {
    const encomendaCriado = this.prismaService.encomenda.create({
      data,
    });
    return encomendaCriado;
  }

  findAll() {
    const todasEncomenda = this.prismaService.encomenda.findMany();
    return todasEncomenda;
  }

  findOne(id: number) {
    const encomenda = this.prismaService.encomenda.findUnique({
      where: { id },
    });
    return encomenda;
  }

  update(id: number, updateEncomendaDto: UpdateEncomendaDto) {
    const encomendaAtualizado = this.prismaService.encomenda.update({
      where: { id },
      data: updateEncomendaDto,
    });
    return encomendaAtualizado;
  }

  remove(id: number) {
    this.prismaService.encomenda.delete({ where: { id } });
    return `This action removes encomenda #${id}`;
  }
}
