-- AlterTable
ALTER TABLE "BankTransaction" ADD COLUMN     "status" "TransactionStatus" NOT NULL DEFAULT 'PROCESSING';
