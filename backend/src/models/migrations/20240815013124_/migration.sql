-- CreateEnum
CREATE TYPE "Role" AS ENUM ('COMPRADOR', 'VENDEDOR');

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "role" "Role" NOT NULL,
    "nome" TEXT NOT NULL,
    "hesh" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "CEP" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Cupom" (
    "idCupom" SERIAL NOT NULL,
    "TipoCupom" TEXT[],
    "Validade" TIMESTAMP(3) NOT NULL,
    "Codigo" TEXT[],
    "Regras" TEXT[],

    CONSTRAINT "Cupom_pkey" PRIMARY KEY ("idCupom")
);

-- CreateTable
CREATE TABLE "Produto" (
    "idProduto" SERIAL NOT NULL,
    "Nome" TEXT[],
    "Valor" DOUBLE PRECISION NOT NULL,
    "CidadeOrigem" TEXT[],
    "Categoria" TEXT[],
    "Descricao" TEXT[],
    "Foto" TEXT[],
    "Avaliacao" DOUBLE PRECISION NOT NULL,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("idProduto")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "idUsuario" INTEGER NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Favoritos" (
    "idUsuario" SERIAL NOT NULL,

    CONSTRAINT "Favoritos_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "ProdutoCarrinho" (
    "idUsuario" INTEGER NOT NULL,
    "quantidadeMesmoProduto" INTEGER NOT NULL,
    "idProduto" INTEGER NOT NULL,

    CONSTRAINT "ProdutoCarrinho_pkey" PRIMARY KEY ("idUsuario","idProduto")
);

-- CreateTable
CREATE TABLE "_CupomToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CarrinhoToCupom" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FavoritosToProduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cupom_Codigo_key" ON "Cupom"("Codigo");

-- CreateIndex
CREATE UNIQUE INDEX "_CupomToUsuario_AB_unique" ON "_CupomToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_CupomToUsuario_B_index" ON "_CupomToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CarrinhoToCupom_AB_unique" ON "_CarrinhoToCupom"("A", "B");

-- CreateIndex
CREATE INDEX "_CarrinhoToCupom_B_index" ON "_CarrinhoToCupom"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoritosToProduto_AB_unique" ON "_FavoritosToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoritosToProduto_B_index" ON "_FavoritosToProduto"("B");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoritos" ADD CONSTRAINT "Favoritos_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoCarrinho" ADD CONSTRAINT "ProdutoCarrinho_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Carrinho"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoCarrinho" ADD CONSTRAINT "ProdutoCarrinho_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("idProduto") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CupomToUsuario" ADD CONSTRAINT "_CupomToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Cupom"("idCupom") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CupomToUsuario" ADD CONSTRAINT "_CupomToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarrinhoToCupom" ADD CONSTRAINT "_CarrinhoToCupom_A_fkey" FOREIGN KEY ("A") REFERENCES "Carrinho"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarrinhoToCupom" ADD CONSTRAINT "_CarrinhoToCupom_B_fkey" FOREIGN KEY ("B") REFERENCES "Cupom"("idCupom") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoritosToProduto" ADD CONSTRAINT "_FavoritosToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Favoritos"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoritosToProduto" ADD CONSTRAINT "_FavoritosToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("idProduto") ON DELETE CASCADE ON UPDATE CASCADE;
