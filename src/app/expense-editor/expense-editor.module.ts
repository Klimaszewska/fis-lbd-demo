import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExpenseEditorComponent} from './expense-editor.component';
import {SharedModule} from '../shared/shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ExpenseEditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'edit', component: ExpenseEditorComponent}
    ]),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExpenseEditorModule { }
