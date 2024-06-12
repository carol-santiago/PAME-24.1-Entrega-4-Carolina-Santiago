import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LasanhaService } from './lasanha.service';
import { CreateLasanhaDto } from './dto/create-lasanha.dto';
import { UpdateLasanhaDto } from './dto/update-lasanha.dto';

@Controller('lasanha')
export class LasanhaController {
  constructor(private readonly lasanhaService: LasanhaService) {}

  @Post()
  create(@Body() createLasanhaDto: CreateLasanhaDto) {
    return this.lasanhaService.create(createLasanhaDto);
  }

  @Get()
  findAll() {
    return this.lasanhaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lasanhaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLasanhaDto: UpdateLasanhaDto) {
    return this.lasanhaService.update(+id, updateLasanhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lasanhaService.remove(+id);
  }
}
