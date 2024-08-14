/*
  Warnings:

  - You are about to drop the column `quantprodutos` on the `Carrinho` table. All the data in the column will be lost.
  - You are about to drop the column `quantProd` on the `ProdutoCarrinho` table. All the data in the column will be lost.
  - Added the required column `quantProdutos` to the `Carrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantProdRepetidos` to the `ProdutoCarrinho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrinho" DROP COLUMN "quantprodutos",
ADD COLUMN     "quantProdutos" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProdutoCarrinho" DROP COLUMN "quantProd",
ADD COLUMN     "quantProdRepetidos" INTEGER NOT NULL;
