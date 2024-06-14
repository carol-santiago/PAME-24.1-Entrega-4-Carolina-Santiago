import { Injectable } from '@nestjs/common';
import { CreateAssocPedidoLasanhaDto } from './dto/create-assoc-pedido-lasanha.dto';
import { UpdateAssocPedidoLasanhaDto } from './dto/update-assoc-pedido-lasanha.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AssocPedidoLasanhaService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateAssocPedidoLasanhaDto) {
    const assoc_PedidoLasanhaCriado =
      this.prismaService.assocPedidoLasanha.create({ data });
    return assoc_PedidoLasanhaCriado;
  }

  findAll() {
    const todasAssoc_PedidoLasanha =
      this.prismaService.assocPedidoLasanha.findMany();
    return todasAssoc_PedidoLasanha;
  }

  findOne(id: number) {
    const assoc_PedidoLasanha =
      this.prismaService.assocPedidoLasanha.findUnique({
        where: { id },
      });
    return assoc_PedidoLasanha;
  }

  update(id: number, updateAssocPedidoLasanhaDto: UpdateAssocPedidoLasanhaDto) {
    const assoc_PedidoLasanhaAtualizado =
      this.prismaService.assocPedidoLasanha.update({
        where: { id },
        data: updateAssocPedidoLasanhaDto,
      });
    return assoc_PedidoLasanhaAtualizado;
  }

  async remove(id: number) {
    await this.prismaService.assocPedidoLasanha.delete({ where: { id } });
    return `This action removes assoc_PedidoLasanha #${id}`;
  }
}
