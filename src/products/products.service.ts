import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private userRepository: Repository<Product>,
    ) { }

    findAll(): Promise<Product[]> {
        return this.userRepository.find()
    }

    findOne(id: number): Promise<Product | null> {
        return this.userRepository.findOneBy({ id })
    }
}
