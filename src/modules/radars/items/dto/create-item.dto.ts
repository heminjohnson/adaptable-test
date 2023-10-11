import { IsNumber, IsString, IsObject, ValidateNested } from 'class-validator';
import { Type } from "class-transformer";

class CategoryDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;
}

export class CreateItemDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CategoryDTO)
  readonly category: CategoryDTO;
}
