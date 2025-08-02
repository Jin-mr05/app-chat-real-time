import { Optional } from "@nestjs/common";
import { Gender } from "prisma/generated/prisma";

export class EditDetailDto {
    @Optional()
    name: string
    @Optional()
    birthDay: string
    @Optional()
    gender: Gender
}