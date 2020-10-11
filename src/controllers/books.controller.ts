import { Controller, Get } from '@nestjs/common';
import { BooksService } from '../services/books.service';

@Controller()
export class BooksController {
  constructor(private readonly BooksService: BooksService) {}

  @Get()
  getHello(): string {
    return this.BooksService.getHello();
  }
}
