/*
  Warnings:

  - You are about to drop the column `description` on the `Discount` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Additional" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "inventory" INTEGER,
    "solds" INTEGER DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Additional_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Additional" ("createdAt", "id", "inventory", "name", "price", "productId", "solds", "type", "updatedAt") SELECT "createdAt", "id", "inventory", "name", "price", "productId", "solds", "type", "updatedAt" FROM "Additional";
DROP TABLE "Additional";
ALTER TABLE "new_Additional" RENAME TO "Additional";
CREATE TABLE "new_Discount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "percent" DECIMAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Discount_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Discount" ("active", "createdAt", "id", "name", "percent", "productId", "updatedAt") SELECT "active", "createdAt", "id", "name", "percent", "productId", "updatedAt" FROM "Discount";
DROP TABLE "Discount";
ALTER TABLE "new_Discount" RENAME TO "Discount";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
