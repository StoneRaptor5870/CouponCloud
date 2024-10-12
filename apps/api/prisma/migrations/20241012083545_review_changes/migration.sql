/*
  Warnings:

  - You are about to drop the `ReviewResponse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReviewResponse" DROP CONSTRAINT "ReviewResponse_reviewId_fkey";

-- DropTable
DROP TABLE "ReviewResponse";
