import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cutom'
})
export class CutomPipe implements PipeTransform {


// {{ 'vasya' | cutom : 123 : 'asd'}}
  transform(value: any, ...args: any[]): any {
    return value + '!' + args[0];
  }

}
