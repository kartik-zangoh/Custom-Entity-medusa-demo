import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProduct1710681329448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE gender AS ENUM ('him', 'her', 'all');
      ALTER TABLE "product"
      ADD COLUMN "gender" gender;
    `);

    await queryRunner.query(`
      ALTER TABLE "product"
      ADD COLUMN "sub_category" varchar(255)
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE "product"
        DROP  COLUMN "gender";
        DROP TYPE gender;
        `);

        await queryRunner.query(`
        ALTER TABLE "product"
        DROP  COLUMN "sub_category"
        `);
    }

}
