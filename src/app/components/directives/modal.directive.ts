import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DanсeHall } from 'src/app/interfaces/interfaces';

@Directive({
  selector: '[appModal]'
})
  
export class ModalDirective {

  @Input() hall: DanсeHall;

  @HostListener('click') onClick() {
    this.addModal();
    // how to make it works once? 
  }

  constructor(private element: ElementRef) { }
  
  addModal() {
    const modal = document.createElement('div');
    const modalWrapper = document.createElement('div');
    const modalWindow = document.createElement('div');
    const closeButton = document.createElement('span');
    const modalInfo = document.createElement('p');
    const rentButton = document.createElement('button');

    modal.classList.add('modal');
    modalWrapper.classList.add('modal-wrapper');
    modalWindow.classList.add('modal-window');
    closeButton.classList.add('close');
    modalInfo.classList.add('modal-info');
    rentButton.classList.add('rent-btn');
    modalInfo.innerHTML = `<h2>${this.hall.name} Hall</h2>
    Group training price: ${this.hall.pricePerCustomer} UAH<br>
    Number of people in the group: ${this.hall.capacity}<br>
    Hall rent price: ${this.hall.priceForRent} UAH<br>
    Additional equipment: ${this.hall.equipment?.join(', ')}<br>
    Status: ${this.hall.isEmpty? 'free for rent' : 'alredy rented'}<br>`;
    closeButton.addEventListener('click', (event) => this.closeModal(event))
    modalWindow.append(modalInfo);
    modalWindow.append(closeButton);
    modalWrapper.append(modalWindow);
    modal.append(modalWrapper);

    this.element.nativeElement.append(modal);
  }

  closeModal(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    const element = this.element.nativeElement.querySelector('.modal');
    element.remove();
  }

}  


