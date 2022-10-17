-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
