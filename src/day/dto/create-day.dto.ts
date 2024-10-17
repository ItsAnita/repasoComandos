import { IsNotEmpty } from "class-validator";

export class CreateDayDto {
    @IsNotEmpty()
    opening: string;

    @IsNotEmpty()
    closing: string;
}
