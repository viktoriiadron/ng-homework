import { ICustomer } from "../interfaces/interfaces";

export const users: ICustomer[] = [
    {
        id: 1,
        name: 'Sonya',
        phoneNumber: '+380667896789',
        email: 'sonya@mail.com',
        password: 'qwerty',
        birth: new Date('1995.08.29'),
        hasSubscription: false,
        ammount: 3
    },
    {
        id: 2,
        name: 'Masha',
        phoneNumber: '+380997876754',
        email: 'aasha@mail.com',
        password: 'qwerty',
        birth: new Date('1995.03.17'),
        hasSubscription: false,
        ammount: 0
    },
        {
        id: 3,
        name: 'Antonina',
        phoneNumber: '+380506778905',
        email: 'antonina@mail.com',
        password: 'qwerty',
        birth: new Date('1995.03.17'),
        hasSubscription: false,
        ammount: 0
    }
]