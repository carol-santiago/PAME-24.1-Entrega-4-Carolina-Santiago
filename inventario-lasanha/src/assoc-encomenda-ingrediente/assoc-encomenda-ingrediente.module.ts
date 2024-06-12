import { Module } from '@nestjs/common';
import { AssocEncomendaIngredienteService } from './assoc-encomenda-ingrediente.service';
import { AssocEncomendaIngredienteController } from './assoc-encomenda-ingrediente.controller';

@Module({
  controllers: [AssocEncomendaIngredienteController],
  providers: [AssocEncomendaIngredienteService],
})
export class AssocEncomendaIngredienteModule {}
