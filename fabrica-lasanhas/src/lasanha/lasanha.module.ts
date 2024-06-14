import { Module } from '@nestjs/common';
import { LasanhaService } from './lasanha.service';
import { LasanhaController } from './lasanha.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [LasanhaController],
  providers: [LasanhaService, PrismaService],
})
export class LasanhaModule {}
