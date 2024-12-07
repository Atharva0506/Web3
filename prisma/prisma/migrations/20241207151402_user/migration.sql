-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "usernaem" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_usernaem_key" ON "User"("usernaem");
