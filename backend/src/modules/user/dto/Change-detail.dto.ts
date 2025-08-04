import { Optional } from "@nestjs/common"
import { Gender } from "prisma/generated/prisma"

export class ChangeDetailDto {
    @Optional()
    name: string
    @Optional()
    birthday: string
    @Optional()
    gender: Gender
}