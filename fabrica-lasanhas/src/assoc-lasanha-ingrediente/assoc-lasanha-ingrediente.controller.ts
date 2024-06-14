import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssocLasanhaIngredienteService } from './assoc-lasanha-ingrediente.service';
import { CreateAssocLasanhaIngredienteDto } from './dto/create-assoc-lasanha-ingrediente.dto';
import { UpdateAssocLasanhaIngredienteDto } from './dto/update-assoc-lasanha-ingrediente.dto';

@Controller('assoc-lasanha-ingrediente')
export class AssocLasanhaIngredienteController {
  constructor(
    private readonly assocLasanhaIngredienteService: AssocLasanhaIngredienteService,
  ) {}

  @Post()
  create(
    @Body() createAssocLasanhaIngredienteDto: CreateAssocLasanhaIngredienteDto,
  ) {
    return this.assocLasanhaIngredienteService.create(
      createAssocLasanhaIngredienteDto,
    );
  }

  @Get()
  findAll() {
    return this.assocLasanhaIngredienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assocLasanhaIngredienteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssocLasanhaIngredienteDto: UpdateAssocLasanhaIngredienteDto,
  ) {
    return this.assocLasanhaIngredienteService.update(
      +id,
      updateAssocLasanhaIngredienteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assocLasanhaIngredienteService.remove(+id);
  }
}
