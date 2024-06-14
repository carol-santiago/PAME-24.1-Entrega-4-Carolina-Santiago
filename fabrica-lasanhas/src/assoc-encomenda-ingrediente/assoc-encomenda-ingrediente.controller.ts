import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssocEncomendaIngredienteService } from './assoc-encomenda-ingrediente.service';
import { CreateAssocEncomendaIngredienteDto } from './dto/create-assoc-encomenda-ingrediente.dto';
import { UpdateAssocEncomendaIngredienteDto } from './dto/update-assoc-encomenda-ingrediente.dto';

@Controller('assoc-encomenda-ingrediente')
export class AssocEncomendaIngredienteController {
  constructor(
    private readonly assocEncomendaIngredienteService: AssocEncomendaIngredienteService,
  ) {}

  @Post()
  // Método POST para criar uma nova associação
  create(
    @Body() // Requer um JSON com os atributos necessários para criar a associação
    createAssocEncomendaIngredienteDto: CreateAssocEncomendaIngredienteDto,
  ) {
    return this.assocEncomendaIngredienteService.create(
      createAssocEncomendaIngredienteDto,
    );
  }

  @Get() // Método GET - lista todas as associações na rota /assoc-encomenda-ingrediente
  findAll() {
    return this.assocEncomendaIngredienteService.findAll();
  }

  @Get(':id') // Método GET - lista a associação com o id especificado na rota /assoc-encomenda-ingrediente/[id]
  findOne(@Param('id') id: string) {
    return this.assocEncomendaIngredienteService.findOne(+id);
  }

  @Patch(':id')
  // Método PATCH - atualiza a associação com o id especificado na rota /assoc-encomenda-ingrediente/[id]
  update(
    @Param('id') id: string,
    @Body() // Requer um JSON com os campos a serem atualizados
    updateAssocEncomendaIngredienteDto: UpdateAssocEncomendaIngredienteDto,
  ) {
    return this.assocEncomendaIngredienteService.update(
      +id,
      updateAssocEncomendaIngredienteDto,
    );
  }

  @Delete(':id')
  // Método DELETE - remove a associação sendo acessada na rota /assoc-encomenda-ingrediente/[id da associação]
  remove(@Param('id') id: string) {
    return this.assocEncomendaIngredienteService.remove(+id);
  }

  @Get('checklist/:id_encomenda')
  // Método GET - lista o checklist da encomenda com o id especificado na rota /assoc-encomenda-ingrediente/checklist/[id da encomenda]
  getChecklist(@Param('id_encomenda') id_encomenda: string) {
    return this.assocEncomendaIngredienteService.getChecklistByEncomenda(
      Number(id_encomenda),
    );
  }

  @Get(':checklist')
  // Handler de erro de rota para encontrar um checklist
  checklistError() {}
}
