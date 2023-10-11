import { IsNumber, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNumber()
  readonly id: number; // will be removed once database is connected

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;
}
