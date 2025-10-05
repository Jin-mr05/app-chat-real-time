import { Gender } from "src/modules/private-chat/private-chat.interface";


export class EditDetailDto {
    name?: string;
    birthDay?: string;
    gender?: Gender;
}