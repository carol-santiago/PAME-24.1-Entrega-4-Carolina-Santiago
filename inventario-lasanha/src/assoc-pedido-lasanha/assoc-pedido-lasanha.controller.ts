import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssocPedidoLasanhaService } from './assoc-pedido-lasanha.service';
import { CreateAssocPedidoLasanhaDto } from './dto/create-assoc-pedido-lasanha.dto';
import { UpdateAssocPedidoLasanhaDto } from './dto/update-assoc-pedido-lasanha.dto';

@Controller('assoc-pedido-lasanha')
export class AssocPedidoLasanhaController {
  constructor(private readonly assocPedidoLasanhaService: AssocPedidoLasanhaService) {}

  @Post()
  create(@Body() createAssocPedidoLasanhaDto: CreateAssocPedidoLasanhaDto) {
    return this.assocPedidoLasanhaService.create(createAssocPedidoLasanhaDto);
  }

  @Get()
  findAll() {
    return this.assocPedidoLasanhaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assocPedidoLasanhaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssocPedidoLasanhaDto: UpdateAssocPedidoLasanhaDto) {
    return this.assocPedidoLasanhaService.update(+id, updateAssocPedidoLasanhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assocPedidoLasanhaService.remove(+id);
  }
}
