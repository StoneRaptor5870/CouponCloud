-- DropForeignKey
ALTER TABLE "Manager" DROP CONSTRAINT "Manager_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "description" TEXT,
ADD COLUMN     "displayName" TEXT;

-- AlterTable
ALTER TABLE "Manager" ADD COLUMN     "displayName" TEXT,
ALTER COLUMN "companyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Manager" ADD CONSTRAINT "Manager_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
