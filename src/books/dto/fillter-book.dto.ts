import { IsOptional } from 'class-validator';

export class filterBookDto {
  @IsOptional()
  title: string;

  @IsOptional()
  author: string;

  @IsOptional()
  category: string;
}
