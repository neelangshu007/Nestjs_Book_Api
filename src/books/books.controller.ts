import { Controller, Get, Post, Put, Delete, Body, Param, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Controller('books')
export class BooksController {
    constructor(
        @InjectModel(Book)
        private readonly bookModel: typeof Book,
    ) { }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    @Get(':id')
    async getBookById(@Param('id') id: number): Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    @Post()
    async createBook(@Body() createBookDto: Book): Promise<Book> {
        try {
            return this.bookModel.create(createBookDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Failed to create the book.');
        }
    }

    @Put(':id')
    async updateBook(
        @Param('id') id: number,
        @Body() updateBookDto: Book,
    ): Promise<Book[]> {
        await this.bookModel.update(updateBookDto, { where: { id } });
        return this.bookModel.findAll();
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: number): Promise<number> {
        return this.bookModel.destroy({ where: { id } });
    }
}

