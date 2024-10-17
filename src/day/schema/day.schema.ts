import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DayDocument= Day & Document

@Schema()
export class Day{
    @Prop()
    opening: string;

    @Prop()
    closing: string;
}

export const DaySchema = SchemaFactory.createForClass(Day)