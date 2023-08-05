import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1691217251422 implements MigrationInterface {
    name = 'Init1691217251422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar2(36), "firstName" varchar2(255) NOT NULL, "lastName" varchar2(255) NOT NULL, "password" varchar2(255) NOT NULL, "age" number NOT NULL, "email" varchar2(255) NOT NULL, "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
