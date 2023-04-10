import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { createBookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';
import { filterBookDto } from './dto/fillter-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  //get all books
  // @Get()
  // getAllBooks() {
  //   return this.booksService.getAllBooks();
  // }

  @Get()
  getBooks(@Query() filter: filterBookDto) {
    return this.booksService.getBooks(filter);
  }

  //get book by id

  @Get('/:id')
  getBookById(@Param('id') id: string) {
    return this.booksService.getBook(id);
  }

  //add book
  @Post()
  // @UsePipes(ValidationPipe)
  createBook(@Body() payload: createBookDto) {
    return this.booksService.createBook(payload);
  }

  //update book
  @Put('/:id')
  // @UsePipes(ValidationPipe)
  updateBook(@Param('id') id: string, @Body() payload: updateBookDto) {
    return this.booksService.updateBook(id, payload);
  }

  //delete book
  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
