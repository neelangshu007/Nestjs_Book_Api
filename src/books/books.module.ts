import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  controllers: [BooksController]
})
export class BooksModule {}
