import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John',
    description: 'El nombre del usuario.',
  })
  @IsString()
  @MinLength(3)
  readonly firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'El apellido del usuario.',
  })
  @IsString()
  @MinLength(3)
  readonly lastName: string;

  @ApiProperty({
    example: 30,
    description: 'La edad del usuario.',
  })
  @IsNumber()
  readonly age: number;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'La dirección de correo electrónico del usuario.',
  })
  @IsString()
  @IsEmail()
  readonly email: string;
}
