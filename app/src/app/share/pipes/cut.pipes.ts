import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutStringPipe implements PipeTransform {
  transform(value: string, limit: number = 40, trail: String = '…'): string {
    if (!value) {
      return '';
    }

    if (value.length <= limit) {
      return value;
    }

    value = value.substr(0, limit);
    return value + trail;
  }
}
