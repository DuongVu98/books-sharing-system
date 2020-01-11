import { Injectable, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book, BookDTO, BookDataRequest } from "../entities/book.entity";
import { Repository, getRepository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book) private bookRepository: Repository<Book>,
    ) {}

    async findAllBooks() {
        return await this.bookRepository.find();
    }

    async findBookById(id: string) {
        const book = await this.bookRepository.findOne({ where: {id} });
        if (!book) {
            throw new HttpException("Book not found", HttpStatus.NOT_FOUND);
        }

        return book;
    }

    async findBooksByUser(user: User){
        const books = await this.bookRepository.find({where: {user}});
        if (!books) {
            throw new HttpException("Book not found", HttpStatus.NOT_FOUND);
        }

        return books;
    }

    async createBook(data: BookDTO) {
        const book = await this.bookRepository.create(data);
        await this.bookRepository.save(book);

        return book;
    }

    async updateBookById(id: string, data: BookDTO) {
        const book = await this.bookRepository.findOne({ where: id });
        if (!book) {
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }

        await this.bookRepository.update(id, data);

        return book;
    }

    async deleteBookById(id: string) {
        const book = await this.bookRepository.findOne({ where: id });
        if (!book) {
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }

        await this.bookRepository.delete(id);

        return book;
    }

    async findBooksByName(name: string): Promise<Book[]> {
        const books = await getRepository(Book)
            .createQueryBuilder("book")
            .where("book.title like :name", { name: "%" + name + "%" })
            .getMany();

        return books;
    }

    async findBooksByAuthor(author: string): Promise<Book[]> {
        const books = await getRepository(Book)
            .createQueryBuilder("book")
            .where("book.author like :author", { author: "%" + author + "%" })
            .getMany();

        return books;
    }

    async findBooksByDepartment(department: string): Promise<Book[]> {
        const books = await getRepository(Book)
            .createQueryBuilder("book")
            .leftJoinAndSelect("book.departments", "department")
            .getMany();

        return books;
    }

    async findBooksByTag(tag: string): Promise<Book[]> {
        const books = await getRepository(Book)
            .createQueryBuilder("book")
            .leftJoinAndSelect("book.tags", "tag")
            .getMany();

        return books;
    }

    async findBooksByGenre(gerne: string): Promise<Book[]> {
        const books = await getRepository(Book)
            .createQueryBuilder("book")
            .leftJoinAndSelect("book.genres", "genre")
            .getMany();

        return books;
    }

    mapBookInputDataToBookDTO(inputData: BookDataRequest, user: User): BookDTO {
        return {
            title: inputData.title,
            author: inputData.author,
            amount: inputData.amount,
            user: user
        } as BookDTO;
    }
}
