import { ICustomer } from "src/app/interfaces/interfaces";

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
