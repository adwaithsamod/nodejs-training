import {MigrationInterface, QueryRunner} from "typeorm";

export class EmployeeRoles1649267726072 implements MigrationInterface {
    name = 'EmployeeRoles1649267726072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "role_id" SERIAL NOT NULL, "role_name" character varying NOT NULL, CONSTRAINT "PK_09f4c8130b54f35925588a37b6a" PRIMARY KEY ("role_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
