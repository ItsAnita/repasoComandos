import { Injectable} from '@nestjs/common';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';


@Injectable()
export class DayService {

  async create(createDayDto: CreateDayDto) {
    return 'This action adds a new location';
  }

  async findAll() {
    return `This action returns all location`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} location`;
  }

  async update(id: string, updateDayDto: UpdateDayDto) {
    return `This action updates a #${id} location`;
  }

  async remove(id: string) {
    return `This action removes a #${id} location`;
  }
}
