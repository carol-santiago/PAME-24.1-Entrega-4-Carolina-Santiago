import { Module } from '@nestjs/common';
import { EncomendaService } from './encomenda.service';
import { EncomendaController } from './encomenda.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [EncomendaController],
  providers: [EncomendaService, PrismaService],
})
export class EncomendaModule {}
