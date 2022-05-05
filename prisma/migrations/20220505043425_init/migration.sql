-- CreateTable
CREATE TABLE "Mission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(50) NOT NULL,
    "missionCommander" VARCHAR(60) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mission_name_key" ON "Mission"("name");
