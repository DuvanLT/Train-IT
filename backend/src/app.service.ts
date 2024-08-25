import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { Repository } from 'typeorm';

@Injectable() //La documentacion indica que un injactable es contenido que se le proporciona al DOM antes de ser mostrado en pantalla
//por lo cual en este apartado indicamos que es ese injactable que se le proporcionara mas tarde DOM en su Frontend
export class AppService {
 constructor(
  @InjectRepository(Table)
  private myRepository: Repository<Table>,
 ) {}
 async findAll() : Promise<Table[]> { //esperamos una promesa el cual nos debera retornar los valores de nuestra entidad tabla los cuales son
  // nombre,precio y descripcion
  return this.myRepository.find();
 }
}
