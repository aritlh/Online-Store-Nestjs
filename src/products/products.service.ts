import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.entity';
import { Repository } from 'typeorm';

/**
 * The @Injectable() decorator declares that ProductsService can be injected and instantiated by Nest as a provider.
 */
@Injectable()
export class ProductsService {
    /**
     * In the constructor , the @InjectRepository() decorator injects the products repository. 
     * The products repository must be registered to be injected in AppModule.
     */
    constructor(
        @InjectRepository(Product)
        /**
         * The productsRepository attribute is an instance of the Repository<Product> class. 
         * TypeORM Repository is a class that works with our entity objects (in this case our Product entity). 
         * The TypeORM Repository class provides a set of useful methods (such as find, create, remove, insert, and update) to manage a specific entity.
         */
        private userRepository: Repository<Product>,
    ) { }

    /**
     * The findAll method returns a Promise consisting of an array of products. 
     * findAll uses the productsRepository attribute, which invokes the find method (inherited from the TypeORM Repository class) and returns all products from the database.
     */
    findAll(): Promise<Product[]> {
        return this.userRepository.find()
    }

    /**
     * The findOne method receives an id and returns a Promise consisting of one product. 
     * This method uses the productsRepository attribute, invokes its findOne method (inherited from the TypeORM Repository class), and returns the specific product from the database based on id 
     */
    findOne(id: number): Promise<Product | null> {
        return this.userRepository.findOneBy({ id })
    }
}
