import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'empty',
  pure: false,
})
export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], args){
    var desiredKegState = args[0];
    if(desiredKegState === 'low'){
      return input.filter((keg) => {
        return keg.pints <= 10;
      });
    } else {
      return input;
    }
  }
}
