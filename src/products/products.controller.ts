import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { response } from 'express';

@Controller('products')
export class ProductsController {
    /**
     * 
     * @param productService 
     */
    constructor(private readonly productService: ProductsService) { }

    /**
     * Handle GET request for index route
     * Render index view with list of products
     */
    @Get()
    @Render('products/index')
    async index() {
        const viewData = []
        viewData['title'] = 'Products - Online Store'
        viewData['subtitle'] = 'List of Products'
        viewData['products'] = await this.productService.findAll()
        return {
            viewData: viewData
        }
    }

    /**
      * Handle GET request for show route with product ID parameter
      * Render show view with product details
      */
    @Get(':id')
    async show(@Param() params: any, @Res() response: any) {
        const product = await this.productService.findOne(params.id)
        if (product === undefined) {
            return response.redirect('/products')
        }
        const viewData = []
        viewData['title'] = product.getName() + '- Online Store'
        viewData['subtitle'] = product.getName() + '- Product Information'
        viewData['product'] = product
        return response.render('products/show', { viewData: viewData })
    }
}
