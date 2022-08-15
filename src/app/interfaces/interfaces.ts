
export interface User {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
}

export class User implements User {
    constructor(id: number, name: string, phoneNumber: string, email: string) {
        this.id = id;
        this.name = name,
        this.phoneNumber = phoneNumber,
        this.email = email   
    }
}

export interface Admin extends User {
    hasChangePermition: boolean;
}

export interface Customer extends User {
    birth: Date;
    hasSubscription: boolean;
    ammount: number;
}

export interface DanсeHall {
    name: string;
    pricePerCustomer: number;
    priceForRent: number;
    capacity: number;
    isEmpty: boolean;
    equipment?: string[];
    changeRental(value: boolean): void
}

export interface DanceSchool {
    name: string;
    address: string;
    bankAccount: string;
    isWorking: boolean;
    danceHalls: DanсeHall[];
}