import { Module } from '@nestjs/common';
import { TownsService } from './towns.service';
import { TownsController } from './towns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Towns, TownsSchema } from './schema/towns.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Towns.name,
        schema:TownsSchema
      }
    ])
  ],
  controllers: [TownsController],
  providers: [TownsService],
})
export class TownsModule {}
