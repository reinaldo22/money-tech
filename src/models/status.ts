import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('status')
class Status {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;
}

export { Status };