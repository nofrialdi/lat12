import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { createBookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';
import { filterBookDto } from './dto/fillter-book.dto';

@Injectable()
export class BooksService {
  private books: any[] = [];

  //get all books
  // getAllBooks(): any[] {
  //   return this.books;
  // }

  getBooks(filter: filterBookDto): any[] {
    const { title, author, category } = filter;
    const books = this.books.filter((book) => {
      if (title && book.title != title) {
        return false;
      }
      if (author && book.author != author) {
        return false;
      }
      if (category && book.category != category) {
        return false;
      }
      return true;
    });
    return books;
  }

  //get book by id
  getBook(id: string) {
    const bookIndx = this.findBookById(id);
    return this.books[bookIndx];
  }

  //add book
  createBook(createBookDto: createBookDto) {
    const { title, author, category } = createBookDto;
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
    });
  }

  //update book
  updateBook(id: string, updateBookDto: updateBookDto) {
    const { title, author, category } = updateBookDto;
    const bookIdx = this.findBookById(id);
    this.books[bookIdx].title = title;
    this.books[bookIdx].author = author;
    this.books[bookIdx].category = category;
  }

  //find book by id
  findBookById(id: string) {
    const bookIndx = this.books.findIndex((book) => book.id === id);
    if (bookIndx == -1) {
      throw new NotFoundException(`Book with id $(id) is not found`);
    }
    return bookIndx;
  }

  deleteBook(id: string) {
    const bookIndx = this.findBookById(id);
    this.books.splice(bookIndx, 1);
  }
}
