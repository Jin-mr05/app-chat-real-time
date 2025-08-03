export class PaginationDto {
    page: number = 1;
    limit: number = 20;
    sort?: 'asc' | 'desc' = 'desc';
}