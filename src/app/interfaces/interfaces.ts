
interface User {
    readonly id: number;
    name: string;
    phoneNumber: string;
    email: string;
}

interface Admin extends User {
    hasChangePermition: boolean;
}

interface Customer extends User {
    birth: Date;
    hasSubscription: boolean;
    ammount: number;
}

interface DanсeHall {
    name: string;
    pricePerCustomer: number;
    priceForRent: number;
    capacity: number;
    isEmpty: boolean;
    equipment?: string[];
}

interface DanceSchool {
    name: string;
    address: string;
    bankAccount: string;
    isWorking: boolean;
    danceHalls: DanсeHall[];
}