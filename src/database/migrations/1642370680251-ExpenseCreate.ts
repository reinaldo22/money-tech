import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ExpenseCreate1642370680251 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'expense',
            columns:[
                {
                    name:'id',
                    type:'uuid',
                    isPrimary:true,
                    generationStrategy:'uuid',
                    default:'uuid_generate_v4()'
                },
                {
                    name:'name',
                    type:'varchar'
                },
                {
                    name: 'value',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                  },
                  {
                    name: 'date',
                    type: 'varchar',
                  },
                  {
                    name: 'statusId',
                    type: 'integer',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'now()',
                }
            ],
            foreignKeys:[
                {
                    name: "FKStatus",
                    referencedTableName: 'status',
                    referencedColumnNames: ['id'],
                    columnNames:['statusId']
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
