import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExpenseService} from '../services/expense.service';

@Component({
  selector: 'app-expense-editor',
  templateUrl: './expense-editor.component.html',
  styleUrls: ['./expense-editor.component.css']
})
export class ExpenseEditorComponent implements OnInit {

  expenseForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenseForm = this.formBuilder.group({
      name: ['', Validators.minLength(2)],
      category: ['']
    });
  }

  updateName(obtainedName: string) {
    console.log(this.expenseForm.controls.name.value);
    this.expenseForm.patchValue({name: obtainedName});
    console.log(obtainedName);
    console.log(this.expenseForm.controls.category.value);
    console.log(this.expenseForm.controls.name.value);
  }

  generateExpense() {
    const expenseName = this.expenseForm.value.name;
    const expenseCategory = this.expenseForm.value.category;
    this.expenseService.addNewExpense(expenseName, expenseCategory);
  }

  onSubmit() {
    if (this.expenseForm.invalid) {
      console.log('INVALID FORM');
    }
    this.generateExpense();
    this.expenseForm.reset();
  }

  get formControls() {
    return this.expenseForm.controls;
  }

}
