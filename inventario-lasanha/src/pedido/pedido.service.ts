import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class PedidoService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreatePedidoDto) {
    const pedidoCriado = this.prismaService.pedido.create({ data });
    return pedidoCriado;
  }

  findAll() {
    const todosPedido = this.prismaService.pedido.findMany();
    return todosPedido;
  }

  findOne(id: number) {
    const pedido = this.prismaService.pedido.findUnique({
      where: { id },
    });
    return pedido;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const pedidoAtualizado = this.prismaService.pedido.update({
      where: { id },
      data: updatePedidoDto,
    });
    return pedidoAtualizado;
  }

  remove(id: number) {
    this.prismaService.pedido.delete({ where: { id } });
    return `This action removes pedido #${id}`;
  }
}
