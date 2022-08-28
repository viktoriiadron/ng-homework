
export interface IUser {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export interface IAdmin extends IUser {
    hasChangePermition: boolean;
}

export interface ICustomer extends IUser {
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