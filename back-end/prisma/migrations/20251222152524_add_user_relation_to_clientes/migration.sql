/*
  Warnings:

  - You are about to drop the column `NOME_DONO` on the `ATENDIMENTOS` table. All the data in the column will be lost.
  - You are about to drop the column `NOME_PET` on the `ATENDIMENTOS` table. All the data in the column will be lost.
  - You are about to drop the column `RACA_PET` on the `ATENDIMENTOS` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ATENDIMENTOS" DROP COLUMN "NOME_DONO",
DROP COLUMN "NOME_PET",
DROP COLUMN "RACA_PET";

-- AlterTable
ALTER TABLE "CLIENTES" ADD COLUMN     "ID_USUARIO" INTEGER;

-- CreateIndex
CREATE INDEX "CLIENTES_ID_USUARIO_idx" ON "CLIENTES"("ID_USUARIO");

-- AddForeignKey
ALTER TABLE "CLIENTES" ADD CONSTRAINT "CLIENTES_ID_USUARIO_fkey" FOREIGN KEY ("ID_USUARIO") REFERENCES "USUARIOS"("ID_USUARIO") ON DELETE SET NULL ON UPDATE CASCADE;
