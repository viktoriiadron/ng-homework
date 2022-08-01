import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'uah' }) 

export class UahPipe implements PipeTransform {
    constructor() {

    }
    transform(value: any) {
       return value + ' UAH'
    }
}