import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  index() {
    return {
      title: 'Home Page - Online Store'
    }
  }

  @Get('/about')
  @Render('about')
  about() {
    let viewData = []
    viewData['description'] = 'This is an about page ...'
    viewData['author'] = 'Developed by: norieau'

    let titlePage = 'About us - Online Store'
    return {
      title: titlePage,
      subtitle: 'About us',
      viewData: viewData
    }
  }
}
