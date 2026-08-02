import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'split',
    standalone: false
})
export class SplitPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string[] {
    return value.split('');
  }

}
