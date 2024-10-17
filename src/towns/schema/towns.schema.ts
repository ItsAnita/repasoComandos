import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Announcement } from "src/announcement/schemas/announcement.schema";
import { Location } from "src/location/schemas/location.schema";
import { Place } from "src/place/schema/place.schema";

export type TownsDocument = Towns & Document;

@Schema()
export class Towns{
    @Prop({required: true})
    name: string;

    @Prop({required:true, unique:true})
    official_name: string;

    @Prop()
    description: string;

    @Prop()
    images: string[];

    @Prop()
    location: Location;

    @Prop()
    places: Place[];

    @Prop()
    announcements: Announcement[];

    @Prop({
        default:true
    })
    enable: boolean;
}

export const TownsSchema = SchemaFactory.createForClass(Towns)