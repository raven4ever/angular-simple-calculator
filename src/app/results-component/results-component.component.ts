import {Component, OnInit} from '@angular/core';
import {NumbersService} from '../numbers.service';

@Component({
  selector: 'app-results-component',
  templateUrl: './results-component.component.html'
})
export class ResultsComponentComponent implements OnInit {
  a = 5;
  b = 5;

  constructor(private numbersService: NumbersService) {
    this.numbersService.firstNumberChanged.subscribe((a: number) => this.a = a);
    this.numbersService.secondNumberChanged.subscribe((b: number) => this.b = b);
  }

  ngOnInit() {
  }

  numbersSum(a: number, b: number): number {
    return +a + +b;
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
