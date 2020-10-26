import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class NumbersService {
  firstNumberChanged = new EventEmitter<number>();
  secondNumberChanged = new EventEmitter<number>();
}
