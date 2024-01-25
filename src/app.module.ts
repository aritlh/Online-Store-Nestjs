import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { ProductsService } from './products/products.service';
import { Product } from './models/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'norieau',
      password: 'ganteng',
      database: 'online_store',
      entities: ['./dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Product])
  ],
=======

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
>>>>>>> master
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule { }
