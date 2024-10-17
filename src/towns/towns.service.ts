import { Injectable } from '@nestjs/common';
import { CreateTownDto } from './dto/create-town.dto';
import { UpdateTownDto } from './dto/update-town.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TownsDocument, Towns } from './schema/towns.schema';
import { Model } from 'mongoose';

@Injectable()
export class TownsService {
  constructor(@InjectModel(Towns.name) private townsModule: Model<TownsDocument>){}

  async create(createTownDto: CreateTownDto) {
    const townCreated = this.townsModule.create(createTownDto);
    return townCreated;
  }

  findAll() {
    return `This action returns all towns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} town`;
  }

  update(id: number, updateTownDto: UpdateTownDto) {
    return `This action updates a #${id} town`;
  }

  remove(id: number) {
    return `This action removes a #${id} town`;
  }
}
