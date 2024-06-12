import { Module } from '@nestjs/common';
import { AssocPedidoLasanhaService } from './assoc-pedido-lasanha.service';
import { AssocPedidoLasanhaController } from './assoc-pedido-lasanha.controller';

@Module({
  controllers: [AssocPedidoLasanhaController],
  providers: [AssocPedidoLasanhaService],
})
export class AssocPedidoLasanhaModule {}
