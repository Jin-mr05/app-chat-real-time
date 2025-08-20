import { Gender } from "prisma/generated/prisma";

export class EditDetailDto {
    name?: string;
    birthDay?: string;
    gender?: Gender;
}