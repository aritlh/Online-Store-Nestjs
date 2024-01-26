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

    /**
     * For each Product attribute, we define its corresponding getter and setter. 
     * We will use getters and setters to access and modify our entity/model attributes. It has a lot of advantages which we will talk about later.
     * 
     * For now, the application looks the same. We only modified the way we access entity attributes. 
     * So, what is the advantage? Let’s revisit the boss requirement where we need to display all products’ names in uppercase over the entire application.
     */
    getId(): number {
        return this.id
    }

    setId(id: number) {
        this.id = id
    }

    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    getDescription(): string {
        return this.description
    }

    setDescription(description: string) {
        this.description = description
    }

    getImage(): string {
        return this.image
    }

    setImage(image: string) {
        this.image = image
    }

    getPrice(): number {
        return this.price
    }

    setPrice(price: number) {
        this.price = price
    }
}