/**
 * Return a Celcius or Fahrenheit version of the given Kelvin temperature
 *
 * @author Brandon Pfeiffer
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temp'})
export class TempPipe implements PipeTransform {
  transform(value: number, unit: string): string {
    let returnVal = 0;
    switch (unit) {
      // Fahrenheit
      case 'f':
        returnVal = (value * (9 / 5)) - 459.67;
        return returnVal.toFixed(0);
      // Celcius
      default:
        returnVal = value - 273.15;
        return returnVal.toFixed(0);
    }
  }
}
