import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './schema/place.schema';
import { Model } from 'mongoose';

@Injectable()
export class PlaceService {
  constructor(@InjectModel(Place.name) private placeModule: Model<PlaceDocument>){}

  async create(createPlaceDto: CreatePlaceDto) {
    try{
      const place = await this.placeModule.create(createPlaceDto);
      return place;
    }catch(e){
      throw new InternalServerErrorException(e);
    }
  }

  async findAll() {
    try{
      const place = await this.placeModule.find();
      return place;
    }catch(e){
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(id: string) {
    const place = await this.placeModule.findById(id);
    if(!place){
      throw new NotFoundException("Place no encontrado");
    }
    return place;
  }

  async update(id: string, updatePlaceDto: UpdatePlaceDto) {
    try{
      const place = await this.placeModule.findByIdAndUpdate(
        id,
        {... updatePlaceDto},
        {new: true}
      );
      if(!place){
        throw new NotFoundException(`El place con id ${id} no existe`);
      }
      return place;
    }catch(e){
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: string) {
    const place = await this.placeModule.findByIdAndDelete(id);
    if(!place){
      throw new NotFoundException("Place no encontrado");
    }
    return {message: "El place se ha eliminado"}
  }
}
