import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Entity is a class that maps to a database table (or collection when using MongoDB). 
 * Basic entities consist of columns and relations. 
 * Each entity MUST have a primary column (or ObjectId column if are using MongoDB).
 */
@Entity()
export class Product {
    /**
     * @PrimaryGeneratedColumn() 
     * creates a primary column which value will be automatically generated with an auto-increment value. 
     */
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    image: string

    @Column()
    price: number
}