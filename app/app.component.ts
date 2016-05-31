import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent} from './new-keg';

@Component ({
  selector: 'my-app',
  directives: [NewKegComponent],
  template: `
  <div class = 'container'>
    <keg-form (onNewKeg)='createKeg($event)'>
    </keg-form>
    <keg-list *ngFor='#keg of kegs' >
    </keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg('Lager','Brand', 4, 4)
    ];
  }
  createKeg(keg: Keg): void {
    console.log(this.kegs);
    this.kegs.push(keg);
  }
}
// , brand: string, price: string, abv: string
// , brand, price, abv
