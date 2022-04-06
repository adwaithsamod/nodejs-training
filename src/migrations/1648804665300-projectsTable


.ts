import {MigrationInterface, QueryRunner} from "typeorm";

export class projectsTable1648804665300 implements MigrationInterface {
    name = 'projectsTable1648804665300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Projects" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_b25c37f2cdf0161b4f10ed3121c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Projects"`);
    }

}
