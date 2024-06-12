import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssocEncomendaIngredienteService } from './assoc-encomenda-ingrediente.service';
import { CreateAssocEncomendaIngredienteDto } from './dto/create-assoc-encomenda-ingrediente.dto';
import { UpdateAssocEncomendaIngredienteDto } from './dto/update-assoc-encomenda-ingrediente.dto';

@Controller('assoc-encomenda-ingrediente')
export class AssocEncomendaIngredienteController {
  constructor(private readonly assocEncomendaIngredienteService: AssocEncomendaIngredienteService) {}

  @Post()
  create(@Body() createAssocEncomendaIngredienteDto: CreateAssocEncomendaIngredienteDto) {
    return this.assocEncomendaIngredienteService.create(createAssocEncomendaIngredienteDto);
  }

  @Get()
  findAll() {
    return this.assocEncomendaIngredienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assocEncomendaIngredienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssocEncomendaIngredienteDto: UpdateAssocEncomendaIngredienteDto) {
    return this.assocEncomendaIngredienteService.update(+id, updateAssocEncomendaIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assocEncomendaIngredienteService.remove(+id);
  }
}
