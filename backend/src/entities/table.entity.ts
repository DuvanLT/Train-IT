import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class table{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    description: string
}