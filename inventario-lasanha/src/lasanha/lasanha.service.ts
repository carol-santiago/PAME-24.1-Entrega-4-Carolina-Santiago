import { Injectable } from '@nestjs/common';
import { CreateLasanhaDto } from './dto/create-lasanha.dto';
import { UpdateLasanhaDto } from './dto/update-lasanha.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class LasanhaService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateLasanhaDto) {
    const lasanhaCriado = this.prismaService.lasanha.create({ data });
    return lasanhaCriado;
  }

  findAll() {
    const todasLasanha = this.prismaService.lasanha.findMany();
    return todasLasanha;
  }

  findOne(id: number) {
    const lasanha = this.prismaService.lasanha.findUnique({
      where: { id },
    });
    return lasanha;
  }

  update(id: number, updateLasanhaDto: UpdateLasanhaDto) {
    const lasanhaAtualizado = this.prismaService.lasanha.update({
      where: { id },
      data: updateLasanhaDto,
    });
    return lasanhaAtualizado;
  }

  remove(id: number) {
    this.prismaService.lasanha.delete({ where: { id } });
    return `This action removes lasanha #${id}`;
  }
}
