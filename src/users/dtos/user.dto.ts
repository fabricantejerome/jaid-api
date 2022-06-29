import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  token: string;
}
