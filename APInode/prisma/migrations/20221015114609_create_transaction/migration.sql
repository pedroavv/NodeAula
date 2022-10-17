/*
  Warnings:

  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_idUser_fkey";

-- DropTable
DROP TABLE "Token";

-- CreateTable
CREATE TABLE "tb_tokens" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_transaction" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 0,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_tokens" ADD CONSTRAINT "tb_tokens_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_transaction" ADD CONSTRAINT "tb_transaction_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
