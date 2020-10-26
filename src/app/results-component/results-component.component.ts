import {Component} from '@angular/core';

@Component({
  selector: 'app-results-component',
  templateUrl: './results-component.component.html',
})
export class ResultsComponentComponent {
  a = 5;
  b = 5;

  numbersSum(a: number, b: number): number {
    return a + b;
  }

  numbersDif(a: number, b: number): number {
    return a - b;
  }

  numbersMultiply(a: number, b: number): number {
    return a * b;
  }

  numbersDivide(a: number, b: number): number {
    return a / b;
  }
}
