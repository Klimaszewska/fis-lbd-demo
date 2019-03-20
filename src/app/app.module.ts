import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CategoryModule} from './category/category.module';
import {ExpenseModule} from './expense/expense.module';
import {RouterModule} from '@angular/router';
import {ExpenseEditorModule} from './expense-editor/expense-editor.module';


@NgModule({
  declarations: [
    AppComponent,
/*    ExpenseComponent,*/
/*    CategoryComponent,
    CategoryDetailComponent,*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
/*    RouterModule.forRoot([
      {path: 'expenses', component: ExpenseComponent},
      {path: 'categories', component: CategoryComponent},
      {path: 'categories/:id', component: CategoryDetailComponent}
    ]),*/
    CategoryModule,
    ExpenseModule,
    ExpenseEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
