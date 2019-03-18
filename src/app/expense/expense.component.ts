import { Component, OnInit } from '@angular/core';
import {Expense} from '../expense';
import {ExpenseService} from '../services/expense.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  private expenses: Expense[];

  selectedExpense: Expense;

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenses = this.expenseService.getExpenses();
  }

  onSelect(expense: Expense) {
    console.log(expense.name);
    this.selectedExpense = expense;
  }

  checkTestField(value) {
    console.log(value);
  }
}
