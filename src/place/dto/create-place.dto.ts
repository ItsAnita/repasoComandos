import { IsNotEmpty, IsOptional } from "class-validator";
import { PlaceCategory } from "src/enums/placeCategory.enum";
import { PlaceFeature } from "src/enums/placeFeature.enum";
import { Location } from "src/location/schemas/location.schema";
import { Schedule } from "src/schedule/schema/schedule.schema";

export class CreatePlaceDto {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    category: PlaceCategory;

    @IsOptional()
    description: string;

    @IsOptional()
    images:string[];

    @IsNotEmpty()
    location: Location;

    @IsOptional()
    feature: PlaceFeature;

    @IsOptional()
    schedule: Schedule;

    @IsNotEmpty()
    contact_number: string;

    @IsOptional()
    notes: string;

    @IsNotEmpty()
    owner: string;
}
