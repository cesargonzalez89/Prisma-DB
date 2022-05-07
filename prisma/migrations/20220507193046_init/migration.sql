/*
  Warnings:

  - You are about to drop the column `mainSatck` on the `missionCommander` table. All the data in the column will be lost.
  - Added the required column `mainStack` to the `missionCommander` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "missionCommander" DROP COLUMN "mainSatck",
ADD COLUMN     "mainStack" VARCHAR(50) NOT NULL;
