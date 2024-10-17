import { IsNotEmpty, IsOptional } from "class-validator";
import { AnnounceCategory } from "src/enums/announceCategory.enum";

export class CreateAnnouncementDto {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    category: AnnounceCategory;

    @IsOptional()
    description: string;

    @IsOptional()
    images: string[];

    @IsNotEmpty()
    id_town: string;
}
