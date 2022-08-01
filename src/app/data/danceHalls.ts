import { DanсeHall } from "../interfaces/interfaces";

export const danceHalls: DanсeHall[] = [
    {
        name: 'Purple Hall',
        pricePerCustomer: 60,
        priceForRent: 200,
        capacity: 15,
        isEmpty: true,
        equipment: ['steps', 'fitballs'],
        changeRental(value: boolean) {
            this.isEmpty = value
        }
    },
    {
        name: 'Silver Hall',
        pricePerCustomer: 55,
        priceForRent: 200,
        capacity: 14,
        isEmpty: true,
        equipment: ['mats'],
        changeRental(value: boolean) {
            this.isEmpty = value;
        }
    },
    {
        name: 'Orange Hall',
        pricePerCustomer: 60,
        priceForRent: 200,
        capacity: 10,
        isEmpty: true,
        equipment: ['pilons'],
        changeRental(value: boolean) {
            this.isEmpty = value
        }
    }
]
