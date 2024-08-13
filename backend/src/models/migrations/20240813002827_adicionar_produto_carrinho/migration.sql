-- AlterTable
ALTER TABLE "Carrinho" ALTER COLUMN "idUsuario" DROP DEFAULT;
DROP SEQUENCE "Carrinho_idUsuario_seq";

-- AlterTable
ALTER TABLE "ProdutoCarrinho" ADD COLUMN     "quantProd" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "idUsuario" DROP DEFAULT;
DROP SEQUENCE "ProdutoCarrinho_idUsuario_seq";
