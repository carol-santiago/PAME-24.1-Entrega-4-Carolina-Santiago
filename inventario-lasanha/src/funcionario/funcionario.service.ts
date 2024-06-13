import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class FuncionarioService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateFuncionarioDto) {
    const funcionarioCriado = this.prismaService.funcionario.create({ data });
    return funcionarioCriado;
  }

  findAll() {
    const todosFuncionario = this.prismaService.funcionario.findMany();
    return todosFuncionario;
  }

  findOne(id: number) {
    const funcionario = this.prismaService.funcionario.findUnique({
      where: { id },
    });
    return funcionario;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    const funcionarioAtualizado = this.prismaService.funcionario.update({
      where: { id },
      data: updateFuncionarioDto,
    });
    return funcionarioAtualizado;
  }

  remove(id: number) {
    this.prismaService.funcionario.delete({ where: { id } });
    return `This action removes funcionario #${id}`;
  }
}
