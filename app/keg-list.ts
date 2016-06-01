import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { SingleKegComponent } from './singleKeg';
import { EmptyPipe} from './empty.pipe';
import { EditKegDetailsComponent } from './edit-keg-details'

@Component({
  selector: 'keg-list',
  inputs:['kegList'],
  pipes: [EmptyPipe],
  directives: [SingleKegComponent, EditKegDetailsComponent],
  template:`
  <select (change)='onChange($event.target.value)' class ='filter'>
  <option value="all">Show All</option>
  <option value="low">Show Low Kegs</option>
  </select>
  <div class = 'row'>
  <h3 class = 'col-xs-2'>Name:</h3>
  <h3 class = 'col-xs-2'>Brand:</h3>
  <h3 class = 'col-xs-2'>Price:</h3>
  <h3 class = 'col-xs-2'>ABV:</h3>
  <h3 class = 'col-xs-2'>Pints:</h3>
  </div>
  <keg-display
  *ngFor = '#currentKeg of kegList | empty:filterLow'
  (click)='kegClicked(currentKeg)'
  [class.selected]='currentKeg === selectedKeg'
  [keg]='currentKeg'>
  </keg-display>
  <edit-keg-details *ngIf='selectedKeg' [keg]='selectedKeg'>
  </edit-keg-details>

  `
})

export class KegListComponent{
  public kegList: Keg[];
  public selectedKeg: Keg;
  public filterLow: string = 'all';
  public onKegSelect: EventEmitter<Keg>;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  onChange(filterOption){
    this.filterLow = filterOption;
    console.log(this.filterLow);
  };
}
