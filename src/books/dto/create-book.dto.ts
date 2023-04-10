import { IsNotEmpty } from 'class-validator';

export class createBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  category: string;
}
