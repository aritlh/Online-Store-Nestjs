import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [],
})
export class AppModule {}
