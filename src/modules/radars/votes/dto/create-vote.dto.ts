import { IsNumber, IsString, IsObject, ValidateNested } from 'class-validator';
import { Type } from "class-transformer";
import { CreateItemDto } from "../../items/dto/create-item.dto";

class VoteDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;
}

export class CreateVoteDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly value: string;

  @IsString()
  readonly timestamp: string;

  @IsString()
  readonly employeeId: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateItemDto)
  readonly item: CreateItemDto;
}
