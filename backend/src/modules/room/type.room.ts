export interface UserWithRoom {
    id: string;
    name: string
    createdGroups: {
        id: string;
        name: string;
        roomNumber: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
    }[];
}