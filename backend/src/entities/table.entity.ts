import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

//al igual que express necesitamos hacer referencia al tipo de dato y nombre del dato el cual estamos manejado en la DB
//en este caso se llaman entidades, usamos typecript para decirle que dato deberia usar en caso que no encuentre el tipo
@Entity()
export class Table{
    @Column()
    name: string;
     
    @PrimaryGeneratedColumn() //Indica cual sera la llave primaria 
    id: number;

    @Column('float')
    price: number;

    @Column()
    description: string;
    //estas son las columnas dentro de nuestra base de datos en PostgreSQL 
}