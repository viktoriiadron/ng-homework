import { DanсeHall } from "../interfaces/interfaces";

export const danceHalls: DanсeHall[] = [
    {
        name: 'Purple Hall',
        pricePerCustomer: 60,
        priceForRent: 200,
        capacity: 15,
        isEmpty: true,
        equipment: ['steps', 'fitballs']
    },
    {
        name: 'Silver Hall',
        pricePerCustomer: 55,
        priceForRent: 200,
        capacity: 14,
        isEmpty: true,
        equipment: ['mats']
    },
    {
        name: 'Orange Hall',
        pricePerCustomer: 60,
        priceForRent: 200,
        capacity: 10,
        isEmpty: true,
        equipment: ['pilons']
    }
]
