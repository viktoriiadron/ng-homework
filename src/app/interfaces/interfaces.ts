
export interface IUser {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    _password: string;
}

export interface IAdmin extends IUser {
    hasChangePermition: boolean;
}

export interface ICustomer extends IUser {
    birth: Date;
    hasSubscription: boolean;
    ammount: number;
}

export class Customer implements ICustomer {
    constructor(id: number, name: string, phoneNumber: string, email: string, password: string, birth: Date ) {
        this.id = id;
        this.name = name,
        this.phoneNumber = phoneNumber,
        this.email = email,
        this._password = password,
        this.birth = birth,
        this.ammount = 0
    }
    birth: Date;
    hasSubscription: boolean;
    ammount: number;
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    _password: string;
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