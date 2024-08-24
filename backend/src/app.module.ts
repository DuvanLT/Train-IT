import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'Market',
      entities: [Table],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Table]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
