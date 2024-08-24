import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { table } from './entities/table.entity';
//Creamos un modulo para conectar la base de datos en cuanto sus propiedades
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'postgres',
      host : 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'Market',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //facilita el encuentro de las entidades 
      synchronize: true, 
    })
    TypeOrmModule.forFeature([table]), //ademas de conectarla, hacemos uso de las entidades donde se especifican los tipos de datos y la cantidad de datos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
