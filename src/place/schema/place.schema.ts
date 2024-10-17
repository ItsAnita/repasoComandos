import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { PlaceFeature } from "src/enums/placeFeature.enum";
import { PlaceCategory } from "src/enums/placeCategory.enum";
import { Location } from "src/location/schemas/location.schema";
import { Schedule } from "src/schedule/schema/schedule.schema";

export type PlaceDocument = Place & Document;

@Schema()
export class Place{
    @Prop()
    name: string;

    @Prop({
        type:String,
        enum:PlaceCategory,
        default: PlaceCategory.LocalShop
    })
    category: PlaceCategory;

    @Prop()
    description: string;
    
    @Prop()
    images: string[];

    @Prop()
    location: Location;

    @Prop({
        type: String,
        enum: PlaceFeature,
        default: PlaceFeature.Groceries
    }
    )
    feature: PlaceFeature;

    @Prop()
    schedule: Schedule;

    @Prop()
    contact_nuber: string;

    @Prop()
    notes: string;

    @Prop()
    owner: string;

}

export const PlaceSchema = SchemaFactory.createForClass(Place)