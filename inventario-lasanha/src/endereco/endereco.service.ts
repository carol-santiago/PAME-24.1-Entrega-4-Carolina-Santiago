import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class EnderecoService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateEnderecoDto) {
    const enderecoCriado = this.prismaService.endereco.create({ data });
    return enderecoCriado;
  }

  findAll() {
    const todosEndereco = this.prismaService.endereco.findMany();
    return todosEndereco;
  }

  findOne(id: number) {
    const endereco = this.prismaService.endereco.findUnique({
      where: { id },
    });
    return endereco;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    const enderecoAtualizado = this.prismaService.endereco.update({
      where: { id },
      data: updateEnderecoDto,
    });
    return enderecoAtualizado;
  }

  remove(id: number) {
    this.prismaService.endereco.delete({ where: { id } });
    return `This action removes endereco #${id}`;
  }
}
