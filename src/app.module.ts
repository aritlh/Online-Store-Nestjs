import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products/products.service';
import { Product } from './models/product.entity';

@Module({
  imports: [
    /**
     * TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript. 
     * Its goal is to help you develop any application that uses databases, from small applications with a few tables to large scale enterprise applications with multiple databases.
     */
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
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule { }
