import { Injectable } from '@nestjs/common';
import { CreateAssocEncomendaIngredienteDto } from './dto/create-assoc-encomenda-ingrediente.dto';
import { UpdateAssocEncomendaIngredienteDto } from './dto/update-assoc-encomenda-ingrediente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AssocEncomendaIngredienteService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: CreateAssocEncomendaIngredienteDto) {
    const assocEncomendaIngredienteCriado =
      this.prismaService.assocEncomendaIngrediente.create({ data });
    return assocEncomendaIngredienteCriado;
  }

  findAll() {
    const todasAssocEncomendaIngrediente =
      this.prismaService.assocEncomendaIngrediente.findMany();
    return todasAssocEncomendaIngrediente;
  }

  findOne(id: number) {
    const assocEncomendaIngrediente =
      this.prismaService.assocEncomendaIngrediente.findUnique({
        where: { id },
      });
    return assocEncomendaIngrediente;
  }

  update(
    id: number,
    updateAssocEncomendaIngredienteDto: UpdateAssocEncomendaIngredienteDto,
  ) {
    const assocEncomendaIngredienteAtualizado =
      this.prismaService.assocEncomendaIngrediente.update({
        where: { id },
        data: updateAssocEncomendaIngredienteDto,
      });
    return assocEncomendaIngredienteAtualizado;
  }

  async remove(id: number) {
    await this.prismaService.assocEncomendaIngrediente.delete({
      where: { id },
    });
    return `This action removes assocEncomendaIngrediente #${id}`;
  }

  // Método para buscar a lista completa de ingredientes de uma encomenda
  async getChecklistByEncomenda(id_encomenda: number): Promise<
    {
      ingrediente: {
        id: number;
        nome: string;
        qntd_receita: number;
        qntd_estoque: number;
        unidade: string;
      };
      encomenda: {
        id: number;
        data_encomenda: Date;
        status_encomenda: string;
      };
      id: number;
      id_encomenda: number;
      id_ingrediente: number;
      qntd_encomendada: number;
    }[]
  > {
    return this.prismaService.assocEncomendaIngrediente.findMany({
      where: { id_encomenda: id_encomenda },
      include: {
        ingrediente: true, // Incluir informações do ingrediente na resposta
        encomenda: true, // Incluir informações da encomenda na resposta
      },
    });
  }

  async checklistError() {
    return 'Esta ação requer um id de encomenda no url.\n Favor seguir o padrão /assoc-encomenda-ingrediente/checklist/[id da encomenda]';
  }
}
