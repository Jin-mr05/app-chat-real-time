

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export class EditDetailDto {
    name?: string;
    birthDay?: string;
    gender?: Gender;
}