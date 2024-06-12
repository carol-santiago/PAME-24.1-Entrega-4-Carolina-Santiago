import { Module } from '@nestjs/common';
import { AssocLasanhaIngredienteService } from './assoc-lasanha-ingrediente.service';
import { AssocLasanhaIngredienteController } from './assoc-lasanha-ingrediente.controller';

@Module({
  controllers: [AssocLasanhaIngredienteController],
  providers: [AssocLasanhaIngredienteService],
})
export class AssocLasanhaIngredienteModule {}
