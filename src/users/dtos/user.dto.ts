import { Expose } from 'class-transformer';

export class UserDto {
    @Expose()
    id: string;

    @Expose()
    email: string;

    @Expose()
    displayName: string;

    @Expose()
    role: string;
}
