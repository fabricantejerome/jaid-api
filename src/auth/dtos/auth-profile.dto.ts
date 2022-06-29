import { Expose } from 'class-transformer';

export class AuthProfileDto {
    @Expose()
    id: number;

    @Expose()
    email: string;

    @Expose()
    displayName: string;

    @Expose()
    role: string;
}