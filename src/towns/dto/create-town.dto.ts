import { IsNotEmpty, IsOptional, minLength } from "class-validator";
import { Announcement } from "src/announcement/schemas/announcement.schema";
import { Location } from "src/location/schemas/location.schema";
import { Place } from "src/place/schema/place.schema";

export class CreateTownDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    official_name: string;

    @IsOptional()
    description: string;

    @IsOptional()
    images: string[];

    @IsNotEmpty()
    location: Location;

    @IsOptional()
    places: Place[];

    @IsOptional()
    announcement: Announcement;

    @IsNotEmpty()
    enable: boolean;
}
