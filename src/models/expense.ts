import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../models/status";

@Entity('expense')
class Expense{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    value: number;

    @JoinColumn({ name: "statusId" })
    @ManyToOne(() => Status, status => status.id, { cascade: true })
    status: Status;

    @Column()
    date:string;

    @CreateDateColumn()
    createdAt: Date;
}


export { Expense };
