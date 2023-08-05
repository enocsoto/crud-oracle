import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      throw new BadRequestException(` Error creating the User ` + error);
    }
  }

  async findAll() {
    try {
      const user = await this.userRepository.find();
      return user;
    } catch (error) {
      throw new NotFoundException(` User not Found on BD `, error);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userRepository.findOne({
        where: { id },
      });
      return user;
    } catch (error) {
      throw new NotFoundException(` Estudent with ID ${id} not found `);
    }
  }

 async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.findOne(id);
      this.userRepository.merge(user, updateUserDto);
      return this.userRepository.save(user);
    } catch (error) {
      throw new NotFoundException(` Error the user has not updated `);
    }
  }

  async remove(id: string) {
    try {
      await this.userRepository.delete(id);
      return `User with id: ${id} deleted`;
    } catch (error) {
      throw new NotFoundException(` User whit id ${id} not found `);
    }
  }
}
