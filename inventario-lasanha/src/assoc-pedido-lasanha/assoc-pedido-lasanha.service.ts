import { Injectable } from '@nestjs/common';
import { CreateAssocPedidoLasanhaDto } from './dto/create-assoc-pedido-lasanha.dto';
import { UpdateAssocPedidoLasanhaDto } from './dto/update-assoc-pedido-lasanha.dto';

@Injectable()
export class AssocPedidoLasanhaService {
  create(createAssocPedidoLasanhaDto: CreateAssocPedidoLasanhaDto) {
    return 'This action adds a new assocPedidoLasanha';
  }

  findAll() {
    return `This action returns all assocPedidoLasanha`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assocPedidoLasanha`;
  }

  update(id: number, updateAssocPedidoLasanhaDto: UpdateAssocPedidoLasanhaDto) {
    return `This action updates a #${id} assocPedidoLasanha`;
  }

  remove(id: number) {
    return `This action removes a #${id} assocPedidoLasanha`;
  }
}
