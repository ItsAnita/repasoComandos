import { IsOptional } from "class-validator";
import { Day } from "src/day/schema/day.schema";

export class CreateScheduleDto {
    @IsOptional()
    monday: Day;

    @IsOptional()
    tuesday: Day;

    @IsOptional()
    wednesday: Day;

    @IsOptional()
    thursday: Day;

    @IsOptional()
    friday: Day;

    @IsOptional()
    saturday: Day;

    @IsOptional()
    sunday: Day;
}
