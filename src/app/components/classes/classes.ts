import { ICustomer } from "src/app/interfaces/interfaces";

export class Customer implements ICustomer {
    constructor(id: number, name: string, phoneNumber: string, email: string,  birth: Date, password: string, hasSubscription: boolean ) {
        this.id = id;
        this.name = name,
        this.phoneNumber = phoneNumber,
        this.email = email,
        this.birth = birth,
        this.password = password,
        this.hasSubscription = hasSubscription,
        this.ammount = 0
    }
    birth: Date;
    hasSubscription: boolean;
    ammount: number;
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
}
