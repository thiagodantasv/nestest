import { Module } from '@nestjs/common';
import { BooksModule } from './books.module'; 
import { UserModule } from './user.module';

@Module({
  imports: [BooksModule, UserModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
