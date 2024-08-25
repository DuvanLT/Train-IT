import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Table } from './entities/table.entity'; 

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(): Promise<Table[]> {
    return this.appService.findAll();
  }
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
