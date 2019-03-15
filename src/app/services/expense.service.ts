import { Injectable } from '@angular/core';
import {Expense} from '../expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  getExpenses(): Expense[] {
    return [
      new Expense(1, 'Basic groceries', 'Shopping', 80),
      new Expense(2, 'Hairdresser', 'Services', 120),
      new Expense(3, 'Dentist', 'Services', 200)
    ];
  }
}
