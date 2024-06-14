import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EncomendaService } from './encomenda.service';
import { CreateEncomendaDto } from './dto/create-encomenda.dto';
import { UpdateEncomendaDto } from './dto/update-encomenda.dto';

@Controller('encomenda')
export class EncomendaController {
  constructor(private readonly encomendaService: EncomendaService) {}

  @Post() // Método POST para criar uma nova encomenda
  create(@Body() createEncomendaDto: CreateEncomendaDto) {
    // Requer um JSON com os atributos necessários para criar a encomenda
    return this.encomendaService.create(createEncomendaDto);
  }

  @Get() // Método GET - lista todas as encomendas na rota /encomenda
  findAll() {
    return this.encomendaService.findAll();
  }

  @Get(':id') // Método GET - lista a encomenda com o id especificado na rota /encomenda/[id]
  findOne(@Param('id') id: string) {
    return this.encomendaService.findOne(+id);
  }

  @Patch(':id') // Método PATCH - atualiza a encomenda com o id especificado na rota /encomenda/[id]
  update(
    @Param('id') id: string,
    @Body() updateEncomendaDto: UpdateEncomendaDto, // Requer um JSON com os campos a serem atualizados
  ) {
    return this.encomendaService.update(+id, updateEncomendaDto);
  }

  @Delete(':id') // Método DELETE - remove a encomenda sendo acessada na rota /encomenda/[id da encomenda]
  remove(@Param('id') id: string) {
    return this.encomendaService.remove(+id);
  }

  @Get(':id/status')
  // Método GET - lista o status da encomenda com o id especificado na rota /encomenda/[id]/status
  getStatusByEncomendaId(@Param('id') id: string) {
    return this.encomendaService.getStatusByEncomendaId(+id);
  }
}
