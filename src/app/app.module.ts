import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import {FormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ExpenseService} from './services/expense.service';
import {CategoryService} from './services/category.service';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'expenses', component: ExpenseComponent},
      {path: 'categories', component: CategoryComponent}
    ])
  ],
  providers: [ExpenseService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
