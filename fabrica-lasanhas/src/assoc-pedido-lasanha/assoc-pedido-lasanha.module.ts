import { Module } from '@nestjs/common';
import { AssocPedidoLasanhaService } from './assoc-pedido-lasanha.service';
import { AssocPedidoLasanhaController } from './assoc-pedido-lasanha.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [AssocPedidoLasanhaController],
  providers: [AssocPedidoLasanhaService, PrismaService],
})
export class AssocPedidoLasanhaModule {}
