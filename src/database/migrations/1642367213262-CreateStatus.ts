import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStatus1642367213262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'status',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        }));
        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into('status')
        .values([
            {name: 'PAGO'},
            {name: 'NÃO PAGO'}
        ])
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('status');
    }

}
