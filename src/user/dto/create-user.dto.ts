import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNumber,
    IsString,
    MinLength,
  } from 'class-validator';

export class CreateUserDto {
   
   
    @ApiProperty({
        example: 'John',
        description: 'El nombre del usuario.',
      })
    @IsString()
    @MinLength(3)
    firstName: string;

    @ApiProperty({
        example: 'Doe',
        description: 'El apellido del usuario.',
      })
    @IsString()
    @MinLength(3)
    lastName: string;

    @ApiProperty({
        example: 30,
        description: 'La edad del usuario.',
      })
    @IsNumber()
    age: number;

    @ApiProperty({
        example: 'john.doe@example.com',
        description: 'La dirección de correo electrónico del usuario.',
      })
    @IsString()
    @IsEmail()
    email: string;
}
