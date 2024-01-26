import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/**
 * We import the NestExpressApplication interface which provides a set of Express methods. These methods will be available through the app object later. 
 * We also import the join function from the Node.js path library. The path library provides utilities for working with file and directory paths
 */
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

async function bootstrap() {
  /**
   * We create a new app object which has access to a set of NestExpressApplication methods. We then invoke three methods. 
   * We tell Express that the public folder will be used for storing static assets( useStaticAssets method).
   * views folder will contain templates( setBaseViewsDir method), and we specify that the hbs template engine will be used to render HTML output( setViewEngine method).
   */
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
