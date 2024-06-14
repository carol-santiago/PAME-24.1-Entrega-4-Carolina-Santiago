import { Module } from '@nestjs/common';
import { AssocLasanhaIngredienteService } from './assoc-lasanha-ingrediente.service';
import { AssocLasanhaIngredienteController } from './assoc-lasanha-ingrediente.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [AssocLasanhaIngredienteController],
  providers: [AssocLasanhaIngredienteService, PrismaService],
})
export class AssocLasanhaIngredienteModule {}
