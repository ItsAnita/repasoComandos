import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LocationDocument = Location & Document;

@Schema()
export class Location{
    @Prop()
    type: string;

    @Prop()
    latitude: number;

    @Prop()
    altitude: number;

}
export const LocationSchema= SchemaFactory.createForClass(Location);
