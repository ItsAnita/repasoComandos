import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {

  async create(createScheduleDto: CreateScheduleDto) {
    return 'This action adds a new location';
  }

  async findAll() {
    return `This action returns all location`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} location`;
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} location`;
  }

  async remove(id: string) {
    return `This action removes a #${id} location`;
  }
  
}
