import { Module } from '@nestjs/common';
import { LasanhaService } from './lasanha.service';
import { LasanhaController } from './lasanha.controller';

@Module({
  controllers: [LasanhaController],
  providers: [LasanhaService],
})
export class LasanhaModule {}
