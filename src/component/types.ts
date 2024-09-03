export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: Address;
}

export interface UserState {
    list: User[];
}