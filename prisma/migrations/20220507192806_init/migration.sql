-- CreateTable
CREATE TABLE "missionCommander" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "mainSatck" VARCHAR(50) NOT NULL,
    "currentEnrollment" BOOLEAN NOT NULL DEFAULT false,
    "hasAzureCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "missionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "missionCommander_username_key" ON "missionCommander"("username");
