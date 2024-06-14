-- CreateTable
CREATE TABLE "Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "id_endereco" INTEGER,
    CONSTRAINT "Cliente_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "Endereco" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_cliente" INTEGER NOT NULL,
    "data_pedido" DATETIME NOT NULL,
    "status_pedido" TEXT NOT NULL,
    CONSTRAINT "Pedido_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lasanha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_validade" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AssocPedidoLasanha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_pedido" INTEGER NOT NULL,
    "id_lasanha" INTEGER NOT NULL,
    CONSTRAINT "AssocPedidoLasanha_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AssocPedidoLasanha_id_lasanha_fkey" FOREIGN KEY ("id_lasanha") REFERENCES "Lasanha" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qntd_receita" INTEGER NOT NULL,
    "qntd_estoque" INTEGER NOT NULL,
    "unidade" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AssocLasanhaIngrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_lasanha" INTEGER NOT NULL,
    "id_ingrediente" INTEGER NOT NULL,
    CONSTRAINT "AssocLasanhaIngrediente_id_lasanha_fkey" FOREIGN KEY ("id_lasanha") REFERENCES "Lasanha" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AssocLasanhaIngrediente_id_ingrediente_fkey" FOREIGN KEY ("id_ingrediente") REFERENCES "Ingrediente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Encomenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_encomenda" DATETIME NOT NULL,
    "status_encomenda" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AssocEncomendaIngrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_encomenda" INTEGER NOT NULL,
    "id_ingrediente" INTEGER NOT NULL,
    "qntd_encomendada" INTEGER NOT NULL,
    CONSTRAINT "AssocEncomendaIngrediente_id_encomenda_fkey" FOREIGN KEY ("id_encomenda") REFERENCES "Encomenda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AssocEncomendaIngrediente_id_ingrediente_fkey" FOREIGN KEY ("id_ingrediente") REFERENCES "Ingrediente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_endereco_key" ON "Cliente"("id_endereco");
