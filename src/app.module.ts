import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'norieau',
    password: 'ganteng',
    database: 'online_store',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true
  })],
  controllers: [AppController, ProductsController],
  providers: [],
})
export class AppModule { }
