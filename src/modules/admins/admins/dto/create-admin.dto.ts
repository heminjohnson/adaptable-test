import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  readonly fullName: string;

  @IsString()
  readonly employeeId: string;

  @IsString()
  readonly email: string;
}
