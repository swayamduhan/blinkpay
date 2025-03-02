/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `BankTransaction` will be added. If there are existing duplicate values, this will fail.
  - Made the column `token` on table `BankTransaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BankTransaction" ALTER COLUMN "token" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BankTransaction_token_key" ON "BankTransaction"("token");
