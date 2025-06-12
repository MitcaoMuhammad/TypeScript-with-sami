export declare class UserService {
    private users;
    constructor();
    getUsers(): {
        id: number;
        name: string;
    }[];
    addUser(name: string): {
        id: number;
        name: string;
    };
}
