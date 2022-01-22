import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./status";

@Entity('expense')
class Expense{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @JoinColumn({ name: "statusId" })
    @ManyToOne(() => Status, status => status.id, { cascade: true })
    status: Status;

    @Column({type: 'real'})
    value: number;

    @Column()
    date:string;

    @CreateDateColumn()
    createdAt: Date;
}



export { Expense };
