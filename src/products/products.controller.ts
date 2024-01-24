import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    static product = [
        {
            id: 1,
            name: 'TV',
            image: 'avatar.jpg',
            description: 'Best TV',
            price: 1000
        },
        {
            id: 2,
            name: 'Iphone',
            image: 'avatar.jpg',
            description: 'Best Smartphone',
            price: 1000
        },
        {
            id: 3,
            name: 'Glasses',
            image: 'avatar.jpg',
            description: 'Best Glasses',
            price: 1000
        }
    ]

    @Get()
    @Render('products/index')
    index() {
        const viewData = []
        viewData['title'] = 'Products - Online Store'
        viewData['subtitle'] = 'List of Products'
        viewData['products'] = ProductsController.product
        return {
            viewData: viewData
        }
    }

    @Get(':id')
    @Render('products/show')
    show(@Param() params: any) {
        const product = ProductsController.product[params.id - 1]
        const viewData = []
        viewData['title'] = product.name + '- Online Store'
        viewData['subtitle'] = product.name + '- Product Information'
        viewData['product'] = product
        return {
            viewData: viewData
        }
    }
}
