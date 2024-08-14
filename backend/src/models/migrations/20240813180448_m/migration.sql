/*
  Warnings:

  - You are about to drop the column `quantidadeprodutos` on the `Carrinho` table. All the data in the column will be lost.
  - Added the required column `quantprodutos` to the `Carrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorTotal` to the `Carrinho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrinho" DROP COLUMN "quantidadeprodutos",
ADD COLUMN     "quantprodutos" INTEGER NOT NULL,
ADD COLUMN     "valorTotal" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProdutoCarrinho" ALTER COLUMN "quantProd" DROP DEFAULT;
