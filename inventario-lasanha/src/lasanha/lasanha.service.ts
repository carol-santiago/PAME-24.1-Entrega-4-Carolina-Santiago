import { Injectable } from '@nestjs/common';
import { CreateLasanhaDto } from './dto/create-lasanha.dto';
import { UpdateLasanhaDto } from './dto/update-lasanha.dto';

@Injectable()
export class LasanhaService {
  create(createLasanhaDto: CreateLasanhaDto) {
    return 'This action adds a new lasanha';
  }

  findAll() {
    return `This action returns all lasanha`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lasanha`;
  }

  update(id: number, updateLasanhaDto: UpdateLasanhaDto) {
    return `This action updates a #${id} lasanha`;
  }

  remove(id: number) {
    return `This action removes a #${id} lasanha`;
  }
}
