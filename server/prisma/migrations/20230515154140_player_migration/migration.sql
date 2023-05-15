-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "imgTeam" TEXT NOT NULL,
    "kills" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "imgCountry" TEXT NOT NULL,
    "age" INTEGER NOT NULL
);
