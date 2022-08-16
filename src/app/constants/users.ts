import { ICustomer } from "../interfaces/interfaces";

export const users: ICustomer[] = [
    {
        id: 1,
        name: 'Sonya',
        phoneNumber: '+312344564',
        email: 'sonya@mail.com',
        _password: 'qwerty',
        birth: new Date('1995.03.17'),
        hasSubscription: false,
        ammount: 0
    },
    {
        id: 2,
        name: 'Masha',
        phoneNumber: '+3123463564',
        email: 'Masha@mail.com',
        _password: 'qwerty',
        birth: new Date('1995.03.17'),
        hasSubscription: false,
        ammount: 0
    },
        {
        id: 3,
        name: 'Antonina',
        phoneNumber: '+33462344564',
        email: 'Antonina@mail.com',
        _password: 'qwerty',
        birth: new Date('1995.03.17'),
        hasSubscription: false,
        ammount: 0
    }
]