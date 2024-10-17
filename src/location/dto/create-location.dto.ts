import { IsNotEmpty } from "class-validator";

export class CreateLocationDto {
    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    lalitude: number;

    @IsNotEmpty()
    altitude: number;
}
