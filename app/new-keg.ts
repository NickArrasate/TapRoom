import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-form',
  outputs: ['onNewKeg'],
  template:`

    <h2> Add a Keg:</h2>
    <input placeholder = 'Name of Beer' class = 'col-sm-3 input-lg' #newName>
    <input placeholder = 'Brand' class = 'col-sm-3 input-lg' #newBrand>
    <input placeholder = 'Price' class = 'col-sm-3 input-lg' #newPrice>
    <input placeholder = 'ABV' class = 'col-sm-3 input-lg' #newABV>
    <button (click)= 'addKeg(newName, newBrand, newPrice, newABV)'class='btn-success btn-lg add-keg'>Add</button>

  `
})

export class NewKegComponent {
  public onNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newABV: HTMLInputElement){
    var newKeg = new Keg(newName.value, newBrand.value, parseInt(newPrice.value), parseInt(newABV.value));
    this.onNewKeg.emit(newKeg);
    newName.value = '';
    newBrand.value = '';
    newPrice.value = '';
    newABV.value = '';
  }
}
