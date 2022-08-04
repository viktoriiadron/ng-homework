
export interface User {
    readonly id: number;
    name: string;
    phoneNumber: string;
    email: string;
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