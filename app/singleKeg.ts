import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div class = 'row'>
  <h4 class='col-xs-2'>{{keg.name}}</h4>
  <h4 class='col-xs-2'>{{keg.brand}}</h4>
  <h4 class='col-xs-2'>{{keg.price}}</h4>
  <h4 class='col-xs-2'>{{keg.abv}}</h4>
  <h4 class='col-xs-2'>{{keg.pints}}</h4>
  <button class='col-sm-1' (click)='minusPint()'>Pour</button>
  </div>
  `
})

export class SingleKegComponent {
  public keg: Keg;
  minusPint(){
    this.keg.pints -= 1;
  }
}
