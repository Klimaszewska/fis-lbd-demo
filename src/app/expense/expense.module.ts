import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ExpenseComponent} from './expense.component';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
/*    CommonModule,
    FormsModule,*/
    RouterModule.forChild([
      {path: 'expenses', component: ExpenseComponent}
      ]),
    SharedModule
  ]
})
export class ExpenseModule { }
