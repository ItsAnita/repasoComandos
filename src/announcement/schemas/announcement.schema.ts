import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { AnnounceCategory } from "src/enums/announceCategory.enum";

export type AnnoncementDocument = Announcement & Document;

@Schema()
export class Announcement{
    @Prop()
    name: string;

    @Prop({
        type: String,
        enum: AnnounceCategory,
        default: AnnounceCategory.Commercial
    })
    category: AnnounceCategory;

    @Prop()
    description: string;

    @Prop()
    images: string[];
 
    @Prop()
    id_town: string;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);