import {Component} from '@angular/core';
import {NumbersService} from '../numbers.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
})
export class InputComponentComponent {
  firstNumber: number = 5;
  secondNumber: number = 5;

  constructor(private numbersService: NumbersService) {
  }

  firstNumberChanged(newValue: number) {
    this.numbersService.firstNumberChanged.emit(newValue);
  }

  secondNumberChanged(newValue: number) {
    this.numbersService.secondNumberChanged.emit(newValue);
  }
}
