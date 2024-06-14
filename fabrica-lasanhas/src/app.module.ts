import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { AssocEncomendaIngredienteModule } from './assoc-encomenda-ingrediente/assoc-encomenda-ingrediente.module';
import { AssocLasanhaIngredienteModule } from './assoc-lasanha-ingrediente/assoc-lasanha-ingrediente.module';
import { AssocPedidoLasanhaModule } from './assoc-pedido-lasanha/assoc-pedido-lasanha.module';
import { EncomendaModule } from './encomenda/encomenda.module';
import { EnderecoModule } from './endereco/endereco.module';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { LasanhaModule } from './lasanha/lasanha.module';
import { PedidoModule } from './pedido/pedido.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ClienteModule,
    FuncionarioModule,
    AssocEncomendaIngredienteModule,
    AssocLasanhaIngredienteModule,
    AssocPedidoLasanhaModule,
    EncomendaModule,
    EnderecoModule,
    IngredienteModule,
    LasanhaModule,
    PedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
