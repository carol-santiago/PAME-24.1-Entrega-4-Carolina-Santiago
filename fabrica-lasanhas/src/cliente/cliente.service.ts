import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ClienteService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateClienteDto) {
    const clienteCriado = this.prismaService.cliente.create({ data });
    return clienteCriado;
  }

  findAll() {
    const todosClientes = this.prismaService.cliente.findMany();
    return todosClientes;
  }

  findOne(id: number) {
    const cliente = this.prismaService.cliente.findUnique({ where: { id } });
    return cliente;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    const clienteAtualizado = this.prismaService.cliente.update({
      where: { id },
      data: updateClienteDto,
    });
    return clienteAtualizado;
  }

  async remove(id: number) {
    await this.prismaService.cliente.delete({ where: { id } });
    return `This action removes cliente #${id}`;
  }
}
