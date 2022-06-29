import { Expose } from 'class-transformer';

export interface User {
    id: number;
    email: string;
    displayName: string;
    role: string;
}

export class AuthDto {
  @Expose()
  token?: string;

  @Expose()
  user: User;
}
