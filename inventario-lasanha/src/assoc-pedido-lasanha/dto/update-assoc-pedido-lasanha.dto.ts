import { PartialType } from '@nestjs/mapped-types';
import { CreateAssocPedidoLasanhaDto } from './create-assoc-pedido-lasanha.dto';

export class UpdateAssocPedidoLasanhaDto extends PartialType(CreateAssocPedidoLasanhaDto) {}
