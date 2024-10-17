import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Day } from "src/day/schema/day.schema";

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule{
    @Prop()
    monday: Day;

    @Prop()
    tuesday: Day;

    @Prop()
    wednesday: Day;

    @Prop()
    thursday: Day;

    @Prop()
    friday: Day;

    @Prop()
    saturday: Day;

    @Prop()
    sunday: Day;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule)