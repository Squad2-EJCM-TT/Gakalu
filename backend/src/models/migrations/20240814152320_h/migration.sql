/*
  Warnings:

  - You are about to drop the column `quantProdRepetidos` on the `ProdutoCarrinho` table. All the data in the column will be lost.
  - Added the required column `quantidadeMesmoProduto` to the `ProdutoCarrinho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrinho" ALTER COLUMN "valorTotal" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "ProdutoCarrinho" DROP COLUMN "quantProdRepetidos",
ADD COLUMN     "quantidadeMesmoProduto" INTEGER NOT NULL;
