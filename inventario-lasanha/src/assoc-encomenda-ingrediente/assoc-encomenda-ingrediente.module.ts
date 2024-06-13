import { Module } from '@nestjs/common';
import { AssocEncomendaIngredienteService } from './assoc-encomenda-ingrediente.service';
import { AssocEncomendaIngredienteController } from './assoc-encomenda-ingrediente.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [AssocEncomendaIngredienteController],
  providers: [AssocEncomendaIngredienteService, PrismaService],
})
export class AssocEncomendaIngredienteModule {}
