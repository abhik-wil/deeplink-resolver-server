-- AlterTable
ALTER TABLE "Template" ALTER COLUMN "id" SET DEFAULT substr(gen_random_uuid()::text, 1, 16);

-- AlterTable
ALTER TABLE "Usecase" ADD COLUMN     "creatorName" TEXT,
ADD COLUMN     "description" TEXT,
ALTER COLUMN "id" SET DEFAULT substr(gen_random_uuid()::text, 1, 16);
