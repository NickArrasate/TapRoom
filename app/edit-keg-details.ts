import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-edit">
    <h3>Edit Description</h3>
    <input [(ngModel)]='keg.name' placeholder="Edit Name">
    <input [(ngModel)]='keg.brand' placeholder="Edit Brand">
    <input [(ngModel)]='keg.price' placeholder="Edit Price">
    <input [(ngModel)]='keg.abv' placeholder="Edit ABV">
  </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
