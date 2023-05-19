/*
  Warnings:

  - Added the required column `imgPlayer` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "imgTeam" TEXT NOT NULL,
    "kills" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "imgCountry" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "imgPlayer" TEXT NOT NULL
);
INSERT INTO "new_Player" ("age", "country", "id", "imgCountry", "imgTeam", "kills", "team", "username") SELECT "age", "country", "id", "imgCountry", "imgTeam", "kills", "team", "username" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
