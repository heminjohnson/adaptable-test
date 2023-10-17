import { IsString } from 'class-validator';

export class CreateVoteDto {
  @IsString()
  readonly value: string;

  @IsString()
  readonly employeeId: string;

  @IsString()
  readonly item: string;
}
