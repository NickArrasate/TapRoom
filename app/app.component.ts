import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent} from './new-keg';
import { KegListComponent } from './keg-list';


@Component ({
  selector: 'my-app',
  directives: [NewKegComponent, KegListComponent],
  template: `
  <div class = 'container'>
    <keg-form (onNewKeg)='addKeg($event)'>
    </keg-form>
    <keg-list [kegList]="kegs">
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
  addKeg(keg: Keg): void {
    console.log(this.kegs);
    this.kegs.push(keg);
  }
};
// , brand: string, price: string, abv: string
// , brand, price, abv
